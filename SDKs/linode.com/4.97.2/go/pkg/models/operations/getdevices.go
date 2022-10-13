package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDevicesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetDevicesSecurity struct {
	Option1 *GetDevicesSecurityOption1 `security:"option"`
	Option2 *GetDevicesSecurityOption2 `security:"option"`
}

type GetDevicesRequest struct {
	Security GetDevicesSecurity
}

type GetDevices200ApplicationJSON struct {
	Data    []shared.TrustedDevice `json:"data"`
	Page    *int64                 `json:"page"`
	Pages   *int64                 `json:"pages"`
	Results *int64                 `json:"results"`
}

type GetDevicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetDevicesResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetDevices200ApplicationJSONObject     *GetDevices200ApplicationJSON
	GetDevicesDefaultApplicationJSONObject *GetDevicesDefaultApplicationJSON
}
