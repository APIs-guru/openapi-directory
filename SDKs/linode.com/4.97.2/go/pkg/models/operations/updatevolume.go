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
	Created        *time.Time                         `json:"created"`
	FilesystemPath *string                            `json:"filesystem_path"`
	ID             *int64                             `json:"id"`
	Label          string                             `json:"label"`
	LinodeID       *interface{}                       `json:"linode_id"`
	LinodeLabel    *string                            `json:"linode_label"`
	Region         *string                            `json:"region"`
	Size           *interface{}                       `json:"size"`
	Status         *UpdateVolumeRequestBodyStatusEnum `json:"status"`
	Tags           []string                           `json:"tags"`
	Updated        *time.Time                         `json:"updated"`
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
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	UpdateVolumeDefaultApplicationJSONObject *UpdateVolumeDefaultApplicationJSON
}
