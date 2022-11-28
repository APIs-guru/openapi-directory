package operations

import (
	"openapi/pkg/models/shared"
)

type DetachVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type DetachVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DetachVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DetachVolumeRequest struct {
	PathParams DetachVolumePathParams
	Security   DetachVolumeSecurity
}

type DetachVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	DetachVolume200ApplicationJSONObject     map[string]interface{}
	DetachVolumeDefaultApplicationJSONObject *DetachVolumeDefaultApplicationJSON
}
