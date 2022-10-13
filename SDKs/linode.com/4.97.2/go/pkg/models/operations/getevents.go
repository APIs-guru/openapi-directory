package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetEventsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetEventsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetEventsSecurity struct {
	Option1 *GetEventsSecurityOption1 `security:"option"`
	Option2 *GetEventsSecurityOption2 `security:"option"`
}

type GetEventsRequest struct {
	QueryParams GetEventsQueryParams
	Security    GetEventsSecurity
}

type GetEvents200ApplicationJSON struct {
	Data    []shared.Event `json:"data"`
	Page    *int64         `json:"page"`
	Pages   *int64         `json:"pages"`
	Results *int64         `json:"results"`
}

type GetEventsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetEventsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetEvents200ApplicationJSONObject     *GetEvents200ApplicationJSON
	GetEventsDefaultApplicationJSONObject *GetEventsDefaultApplicationJSON
}
