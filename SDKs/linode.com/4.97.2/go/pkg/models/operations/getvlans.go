package operations

import (
	"openapi/pkg/models/shared"
)

var GetVlaNsServerList = []string{
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
}

type GetVlaNsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetVlaNsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetVlaNs200ApplicationJSON struct {
	Data    []shared.Vlans `json:"data,omitempty"`
	Page    *int64         `json:"page,omitempty"`
	Pages   *int64         `json:"pages,omitempty"`
	Results *int64         `json:"results,omitempty"`
}

type GetVlaNsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetVlaNsRequest struct {
	ServerURL   *string
	QueryParams GetVlaNsQueryParams
	Security    GetVlaNsSecurity
}

type GetVlaNsResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetVlaNs200ApplicationJSONObject     *GetVlaNs200ApplicationJSON
	GetVlaNsDefaultApplicationJSONObject *GetVlaNsDefaultApplicationJSON
}
