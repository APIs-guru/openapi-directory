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

type CreateVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateVolumeRequest struct {
	Request  CreateVolumeRequestBody `request:"mediaType=application/json"`
	Security CreateVolumeSecurity
}

type CreateVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	CreateVolumeDefaultApplicationJSONObject *CreateVolumeDefaultApplicationJSON
}
