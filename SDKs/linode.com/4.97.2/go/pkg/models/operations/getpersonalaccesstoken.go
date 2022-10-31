package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalAccessTokenPathParams struct {
	TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
}

type GetPersonalAccessTokenSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetPersonalAccessTokenSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPersonalAccessTokenSecurity struct {
	Option1 *GetPersonalAccessTokenSecurityOption1 `security:"option"`
	Option2 *GetPersonalAccessTokenSecurityOption2 `security:"option"`
}

type GetPersonalAccessTokenRequest struct {
	PathParams GetPersonalAccessTokenPathParams
	Security   GetPersonalAccessTokenSecurity
}

type GetPersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPersonalAccessTokenResponse struct {
	ContentType                                        string
	PersonalAccessToken                                *shared.PersonalAccessToken
	StatusCode                                         int64
	GetPersonalAccessTokenDefaultApplicationJSONObject *GetPersonalAccessTokenDefaultApplicationJSON
}
