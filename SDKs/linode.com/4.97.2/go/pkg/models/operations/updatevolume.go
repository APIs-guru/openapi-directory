package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type UpdateVolumeRequestBodyInput struct {
	Label string   `json:"label"`
	Tags  []string `json:"tags,omitempty"`
}

type UpdateVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateVolumeRequest struct {
	PathParams UpdateVolumePathParams
	Request    UpdateVolumeRequestBodyInput `request:"mediaType=application/json"`
	Security   UpdateVolumeSecurity
}

type UpdateVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	UpdateVolumeDefaultApplicationJSONObject *UpdateVolumeDefaultApplicationJSON
}
