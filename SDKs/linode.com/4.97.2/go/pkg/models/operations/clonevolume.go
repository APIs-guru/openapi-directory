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

type CloneVolumeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CloneVolumeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CloneVolumeSecurity struct {
	Option1 *CloneVolumeSecurityOption1 `security:"option"`
	Option2 *CloneVolumeSecurityOption2 `security:"option"`
}

type CloneVolumeRequest struct {
	PathParams CloneVolumePathParams
	Request    CloneVolumeRequestBody `request:"mediaType=application/json"`
	Security   CloneVolumeSecurity
}

type CloneVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CloneVolumeResponse struct {
	ContentType                             string
	StatusCode                              int64
	Volume                                  *shared.Volume
	CloneVolumeDefaultApplicationJSONObject *CloneVolumeDefaultApplicationJSON
}
