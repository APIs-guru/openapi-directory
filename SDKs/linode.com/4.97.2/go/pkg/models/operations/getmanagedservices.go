package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedServicesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedServicesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedServicesSecurity struct {
	Option1 *GetManagedServicesSecurityOption1 `security:"option"`
	Option2 *GetManagedServicesSecurityOption2 `security:"option"`
}

type GetManagedServicesRequest struct {
	Security GetManagedServicesSecurity
}

type GetManagedServices200ApplicationJSON struct {
	Data    []shared.ManagedService `json:"data,omitempty"`
	Page    *int64                  `json:"page,omitempty"`
	Pages   *int64                  `json:"pages,omitempty"`
	Results *int64                  `json:"results,omitempty"`
}

type GetManagedServicesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedServicesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetManagedServices200ApplicationJSONObject     *GetManagedServices200ApplicationJSON
	GetManagedServicesDefaultApplicationJSONObject *GetManagedServicesDefaultApplicationJSON
}
