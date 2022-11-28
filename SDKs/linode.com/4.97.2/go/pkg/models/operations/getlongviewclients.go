package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewClientsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLongviewClientsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
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

type GetLongviewClientsRequest struct {
	QueryParams GetLongviewClientsQueryParams
	Security    GetLongviewClientsSecurity
}

type GetLongviewClientsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLongviewClients200ApplicationJSONObject     *GetLongviewClients200ApplicationJSON
	GetLongviewClientsDefaultApplicationJSONObject *GetLongviewClientsDefaultApplicationJSON
}
