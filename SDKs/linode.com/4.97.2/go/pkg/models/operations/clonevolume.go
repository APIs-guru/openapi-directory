package operations

import (
	"openapi/pkg/models/shared"
)

type CloneVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type CloneVolumeRequestBody struct {
	Label string `json:"label"`
}

type CloneVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CloneVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CloneVolumeRequest struct {
	PathParams CloneVolumePathParams
	Request    CloneVolumeRequestBody `request:"mediaType=application/json"`
	Security   CloneVolumeSecurity
}

type CloneVolumeResponse struct {
	ContentType                             string
	StatusCode                              int64
	Volume                                  *shared.Volume
	CloneVolumeDefaultApplicationJSONObject *CloneVolumeDefaultApplicationJSON
}
