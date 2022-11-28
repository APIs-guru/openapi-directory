package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetClientsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetClients200ApplicationJSON struct {
	Data    []shared.OAuthClient `json:"data,omitempty"`
	Page    *int64               `json:"page,omitempty"`
	Pages   *int64               `json:"pages,omitempty"`
	Results *int64               `json:"results,omitempty"`
}

type GetClientsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetClientsRequest struct {
	QueryParams GetClientsQueryParams
	Security    GetClientsSecurity
}

type GetClientsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetClients200ApplicationJSONObject     *GetClients200ApplicationJSON
	GetClientsDefaultApplicationJSONObject *GetClientsDefaultApplicationJSON
}
