package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeTrustedDevicePathParams struct {
	DeviceID int64 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type RevokeTrustedDeviceSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type RevokeTrustedDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RevokeTrustedDeviceRequest struct {
	PathParams RevokeTrustedDevicePathParams
	Security   RevokeTrustedDeviceSecurity
}

type RevokeTrustedDeviceResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	RevokeTrustedDevice200ApplicationJSONObject     map[string]interface{}
	RevokeTrustedDeviceDefaultApplicationJSONObject *RevokeTrustedDeviceDefaultApplicationJSON
}
