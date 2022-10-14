package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type UpdateVolumeRequestBodyStatusEnum string

const (
	UpdateVolumeRequestBodyStatusEnumCreating       UpdateVolumeRequestBodyStatusEnum = "creating"
	UpdateVolumeRequestBodyStatusEnumActive         UpdateVolumeRequestBodyStatusEnum = "active"
	UpdateVolumeRequestBodyStatusEnumResizing       UpdateVolumeRequestBodyStatusEnum = "resizing"
	UpdateVolumeRequestBodyStatusEnumContactSupport UpdateVolumeRequestBodyStatusEnum = "contact_support"
)

type UpdateVolumeRequestBody struct {
	Created        *time.Time                         `json:"created,omitempty"`
	FilesystemPath *string                            `json:"filesystem_path,omitempty"`
	ID             *int64                             `json:"id,omitempty"`
	Label          string                             `json:"label"`
	LinodeID       *interface{}                       `json:"linode_id,omitempty"`
	LinodeLabel    *string                            `json:"linode_label,omitempty"`
	Region         *string                            `json:"region,omitempty"`
	Size           *interface{}                       `json:"size,omitempty"`
	Status         *UpdateVolumeRequestBodyStatusEnum `json:"status,omitempty"`
	Tags           []string                           `json:"tags,omitempty"`
	Updated        *time.Time                         `json:"updated,omitempty"`
}

type UpdateVolumeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateVolumeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateVolumeSecurity struct {
	Option1 *UpdateVolumeSecurityOption1 `security:"option"`
	Option2 *UpdateVolumeSecurityOption2 `security:"option"`
}

type UpdateVolumeRequest struct {
	PathParams UpdateVolumePathParams
	Request    UpdateVolumeRequestBody `request:"mediaType=application/json"`
	Security   UpdateVolumeSecurity
}

type UpdateVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	UpdateVolumeDefaultApplicationJSONObject *UpdateVolumeDefaultApplicationJSON
}
