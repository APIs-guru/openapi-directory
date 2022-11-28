package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedServicesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
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

type GetManagedServicesRequest struct {
	Security GetManagedServicesSecurity
}

type GetManagedServicesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetManagedServices200ApplicationJSONObject     *GetManagedServices200ApplicationJSON
	GetManagedServicesDefaultApplicationJSONObject *GetManagedServicesDefaultApplicationJSON
}
