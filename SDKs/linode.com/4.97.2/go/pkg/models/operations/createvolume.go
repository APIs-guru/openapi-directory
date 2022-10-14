package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVolumeRequestBody struct {
	ConfigID *int64   `json:"config_id,omitempty"`
	Label    *string  `json:"label,omitempty"`
	LinodeID *int64   `json:"linode_id,omitempty"`
	Region   *string  `json:"region,omitempty"`
	Size     *int64   `json:"size,omitempty"`
	Tags     []string `json:"tags,omitempty"`
}

type CreateVolumeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateVolumeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateVolumeSecurity struct {
	Option1 *CreateVolumeSecurityOption1 `security:"option"`
	Option2 *CreateVolumeSecurityOption2 `security:"option"`
}

type CreateVolumeRequest struct {
	Request  CreateVolumeRequestBody `request:"mediaType=application/json"`
	Security CreateVolumeSecurity
}

type CreateVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	CreateVolumeDefaultApplicationJSONObject *CreateVolumeDefaultApplicationJSON
}
