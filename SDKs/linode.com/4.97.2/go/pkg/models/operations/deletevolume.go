package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type DeleteVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteVolumeRequest struct {
	PathParams DeleteVolumePathParams
	Security   DeleteVolumeSecurity
}

type DeleteVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteVolume200ApplicationJSONObject     map[string]interface{}
	DeleteVolumeDefaultApplicationJSONObject *DeleteVolumeDefaultApplicationJSON
}
