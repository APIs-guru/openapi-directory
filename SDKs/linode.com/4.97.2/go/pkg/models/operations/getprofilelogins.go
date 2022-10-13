package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileLoginsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProfileLoginsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetProfileLoginsSecurity struct {
	Option1 *GetProfileLoginsSecurityOption1 `security:"option"`
	Option2 *GetProfileLoginsSecurityOption2 `security:"option"`
}

type GetProfileLoginsRequest struct {
	Security GetProfileLoginsSecurity
}

type GetProfileLogins200ApplicationJSON struct {
	Data    []shared.Login `json:"data"`
	Page    *int64         `json:"page"`
	Pages   *int64         `json:"pages"`
	Results *int64         `json:"results"`
}

type GetProfileLoginsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetProfileLoginsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetProfileLogins200ApplicationJSONObject     *GetProfileLogins200ApplicationJSON
	GetProfileLoginsDefaultApplicationJSONObject *GetProfileLoginsDefaultApplicationJSON
}
