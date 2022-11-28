package operations

import (
	"openapi/pkg/models/shared"
)

type ResizeVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type ResizeVolumeRequestBody struct {
	Size int64 `json:"size"`
}

type ResizeVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ResizeVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResizeVolumeRequest struct {
	PathParams ResizeVolumePathParams
	Request    ResizeVolumeRequestBody `request:"mediaType=application/json"`
	Security   ResizeVolumeSecurity
}

type ResizeVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	ResizeVolume200ApplicationJSONObject     map[string]interface{}
	ResizeVolumeDefaultApplicationJSONObject *ResizeVolumeDefaultApplicationJSON
}
