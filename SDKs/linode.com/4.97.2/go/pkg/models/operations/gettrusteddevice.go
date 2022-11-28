package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrustedDevicePathParams struct {
	DeviceID int64 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetTrustedDeviceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTrustedDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTrustedDeviceRequest struct {
	PathParams GetTrustedDevicePathParams
	Security   GetTrustedDeviceSecurity
}

type GetTrustedDeviceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TrustedDevice                                *shared.TrustedDevice
	GetTrustedDeviceDefaultApplicationJSONObject *GetTrustedDeviceDefaultApplicationJSON
}
