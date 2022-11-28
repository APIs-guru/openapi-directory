package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalAccessTokenPathParams struct {
	TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
}

type GetPersonalAccessTokenSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetPersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPersonalAccessTokenRequest struct {
	PathParams GetPersonalAccessTokenPathParams
	Security   GetPersonalAccessTokenSecurity
}

type GetPersonalAccessTokenResponse struct {
	ContentType                                        string
	PersonalAccessToken                                *shared.PersonalAccessToken
	StatusCode                                         int64
	GetPersonalAccessTokenDefaultApplicationJSONObject *GetPersonalAccessTokenDefaultApplicationJSON
}
