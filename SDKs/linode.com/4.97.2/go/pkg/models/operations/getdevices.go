package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDevices200ApplicationJSON struct {
	Data    []shared.TrustedDevice `json:"data,omitempty"`
	Page    *int64                 `json:"page,omitempty"`
	Pages   *int64                 `json:"pages,omitempty"`
	Results *int64                 `json:"results,omitempty"`
}

type GetDevicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetDevicesRequest struct {
	Security GetDevicesSecurity
}

type GetDevicesResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetDevices200ApplicationJSONObject     *GetDevices200ApplicationJSON
	GetDevicesDefaultApplicationJSONObject *GetDevicesDefaultApplicationJSON
}
