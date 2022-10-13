package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetIPsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetIPsSecurity struct {
	Option1 *GetIPsSecurityOption1 `security:"option"`
	Option2 *GetIPsSecurityOption2 `security:"option"`
}

type GetIPsRequest struct {
	Security GetIPsSecurity
}

type GetIPs200ApplicationJSON struct {
	Data    []shared.IPAddress `json:"data"`
	Page    *int64             `json:"page"`
	Pages   *int64             `json:"pages"`
	Results *int64             `json:"results"`
}

type GetIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetIPsResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetIPs200ApplicationJSONObject     *GetIPs200ApplicationJSON
	GetIPsDefaultApplicationJSONObject *GetIPsDefaultApplicationJSON
}
