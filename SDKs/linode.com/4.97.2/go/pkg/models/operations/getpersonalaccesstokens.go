package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalAccessTokensSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetPersonalAccessTokensSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPersonalAccessTokensSecurity struct {
	Option1 *GetPersonalAccessTokensSecurityOption1 `security:"option"`
	Option2 *GetPersonalAccessTokensSecurityOption2 `security:"option"`
}

type GetPersonalAccessTokensRequest struct {
	Security GetPersonalAccessTokensSecurity
}

type GetPersonalAccessTokens200ApplicationJSON struct {
	Data    []shared.PersonalAccessToken `json:"data"`
	Page    *int64                       `json:"page"`
	Pages   *int64                       `json:"pages"`
	Results *int64                       `json:"results"`
}

type GetPersonalAccessTokensDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetPersonalAccessTokensResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetPersonalAccessTokens200ApplicationJSONObject     *GetPersonalAccessTokens200ApplicationJSON
	GetPersonalAccessTokensDefaultApplicationJSONObject *GetPersonalAccessTokensDefaultApplicationJSON
}
