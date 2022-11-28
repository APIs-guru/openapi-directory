package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetEventsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetEvents200ApplicationJSON struct {
	Data    []shared.Event `json:"data,omitempty"`
	Page    *int64         `json:"page,omitempty"`
	Pages   *int64         `json:"pages,omitempty"`
	Results *int64         `json:"results,omitempty"`
}

type GetEventsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetEventsRequest struct {
	QueryParams GetEventsQueryParams
	Security    GetEventsSecurity
}

type GetEventsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetEvents200ApplicationJSONObject     *GetEvents200ApplicationJSON
	GetEventsDefaultApplicationJSONObject *GetEventsDefaultApplicationJSON
}
