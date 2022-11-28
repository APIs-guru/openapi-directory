package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileLoginsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileLogins200ApplicationJSON struct {
	Data    []shared.Login `json:"data,omitempty"`
	Page    *int64         `json:"page,omitempty"`
	Pages   *int64         `json:"pages,omitempty"`
	Results *int64         `json:"results,omitempty"`
}

type GetProfileLoginsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileLoginsRequest struct {
	Security GetProfileLoginsSecurity
}

type GetProfileLoginsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetProfileLogins200ApplicationJSONObject     *GetProfileLogins200ApplicationJSON
	GetProfileLoginsDefaultApplicationJSONObject *GetProfileLoginsDefaultApplicationJSON
}
