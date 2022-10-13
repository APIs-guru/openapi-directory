package operations

import (
	"openapi/pkg/models/shared"
)

var GetVlaNsServers = []string{
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
}

type GetVlaNsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetVlaNsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetVlaNsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetVlaNsSecurity struct {
	Option1 *GetVlaNsSecurityOption1 `security:"option"`
	Option2 *GetVlaNsSecurityOption2 `security:"option"`
}

type GetVlaNsRequest struct {
	ServerURL   *string
	QueryParams GetVlaNsQueryParams
	Security    GetVlaNsSecurity
}

type GetVlaNs200ApplicationJSON struct {
	Data    []shared.Vlans `json:"data"`
	Page    *int64         `json:"page"`
	Pages   *int64         `json:"pages"`
	Results *int64         `json:"results"`
}

type GetVlaNsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetVlaNsResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetVlaNs200ApplicationJSONObject     *GetVlaNs200ApplicationJSON
	GetVlaNsDefaultApplicationJSONObject *GetVlaNsDefaultApplicationJSON
}
