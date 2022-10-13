package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetClientsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetClientsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetClientsSecurity struct {
	Option1 *GetClientsSecurityOption1 `security:"option"`
	Option2 *GetClientsSecurityOption2 `security:"option"`
}

type GetClientsRequest struct {
	QueryParams GetClientsQueryParams
	Security    GetClientsSecurity
}

type GetClients200ApplicationJSON struct {
	Data    []shared.OAuthClient `json:"data"`
	Page    *int64               `json:"page"`
	Pages   *int64               `json:"pages"`
	Results *int64               `json:"results"`
}

type GetClientsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetClientsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetClients200ApplicationJSONObject     *GetClients200ApplicationJSON
	GetClientsDefaultApplicationJSONObject *GetClientsDefaultApplicationJSON
}
