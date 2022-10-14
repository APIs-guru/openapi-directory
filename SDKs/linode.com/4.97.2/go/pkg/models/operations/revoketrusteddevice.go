package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeTrustedDevicePathParams struct {
	DeviceID int64 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type RevokeTrustedDeviceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type RevokeTrustedDeviceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RevokeTrustedDeviceSecurity struct {
	Option1 *RevokeTrustedDeviceSecurityOption1 `security:"option"`
	Option2 *RevokeTrustedDeviceSecurityOption2 `security:"option"`
}

type RevokeTrustedDeviceRequest struct {
	PathParams RevokeTrustedDevicePathParams
	Security   RevokeTrustedDeviceSecurity
}

type RevokeTrustedDeviceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type RevokeTrustedDeviceResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	RevokeTrustedDevice200ApplicationJSONObject     map[string]interface{}
	RevokeTrustedDeviceDefaultApplicationJSONObject *RevokeTrustedDeviceDefaultApplicationJSON
}
