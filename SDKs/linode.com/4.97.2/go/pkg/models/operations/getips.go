package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetIPs200ApplicationJSON struct {
	Data    []shared.IPAddress `json:"data,omitempty"`
	Page    *int64             `json:"page,omitempty"`
	Pages   *int64             `json:"pages,omitempty"`
	Results *int64             `json:"results,omitempty"`
}

type GetIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetIPsRequest struct {
	Security GetIPsSecurity
}

type GetIPsResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetIPs200ApplicationJSONObject     *GetIPs200ApplicationJSON
	GetIPsDefaultApplicationJSONObject *GetIPsDefaultApplicationJSON
}
