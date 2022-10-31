package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewClientsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLongviewClientsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLongviewClientsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLongviewClientsSecurity struct {
	Option1 *GetLongviewClientsSecurityOption1 `security:"option"`
	Option2 *GetLongviewClientsSecurityOption2 `security:"option"`
}

type GetLongviewClientsRequest struct {
	QueryParams GetLongviewClientsQueryParams
	Security    GetLongviewClientsSecurity
}

type GetLongviewClients200ApplicationJSON struct {
	Data    []shared.LongviewClient `json:"data,omitempty"`
	Page    *int64                  `json:"page,omitempty"`
	Pages   *int64                  `json:"pages,omitempty"`
	Results *int64                  `json:"results,omitempty"`
}

type GetLongviewClientsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewClientsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLongviewClients200ApplicationJSONObject     *GetLongviewClients200ApplicationJSON
	GetLongviewClientsDefaultApplicationJSONObject *GetLongviewClientsDefaultApplicationJSON
}
