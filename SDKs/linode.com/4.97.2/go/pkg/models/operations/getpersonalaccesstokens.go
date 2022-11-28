package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalAccessTokensSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetPersonalAccessTokens200ApplicationJSON struct {
	Data    []shared.PersonalAccessToken `json:"data,omitempty"`
	Page    *int64                       `json:"page,omitempty"`
	Pages   *int64                       `json:"pages,omitempty"`
	Results *int64                       `json:"results,omitempty"`
}

type GetPersonalAccessTokensDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPersonalAccessTokensRequest struct {
	Security GetPersonalAccessTokensSecurity
}

type GetPersonalAccessTokensResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetPersonalAccessTokens200ApplicationJSONObject     *GetPersonalAccessTokens200ApplicationJSON
	GetPersonalAccessTokensDefaultApplicationJSONObject *GetPersonalAccessTokensDefaultApplicationJSON
}
