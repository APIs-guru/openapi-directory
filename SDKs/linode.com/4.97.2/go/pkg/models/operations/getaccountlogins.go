package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountLoginsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountLoginsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetAccountLoginsSecurity struct {
	Option1 *GetAccountLoginsSecurityOption1 `security:"option"`
	Option2 *GetAccountLoginsSecurityOption2 `security:"option"`
}

type GetAccountLoginsRequest struct {
	Security GetAccountLoginsSecurity
}

type GetAccountLogins200ApplicationJSON struct {
	Data    []shared.Login `json:"data"`
	Page    *int64         `json:"page"`
	Pages   *int64         `json:"pages"`
	Results *int64         `json:"results"`
}

type GetAccountLoginsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetAccountLoginsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetAccountLogins200ApplicationJSONObject     *GetAccountLogins200ApplicationJSON
	GetAccountLoginsDefaultApplicationJSONObject *GetAccountLoginsDefaultApplicationJSON
}
