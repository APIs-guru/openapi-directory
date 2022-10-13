package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePersonalAccessTokenPathParams struct {
	TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
}

type UpdatePersonalAccessTokenSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdatePersonalAccessTokenSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdatePersonalAccessTokenSecurity struct {
	Option1 *UpdatePersonalAccessTokenSecurityOption1 `security:"option"`
	Option2 *UpdatePersonalAccessTokenSecurityOption2 `security:"option"`
}

type UpdatePersonalAccessTokenRequest struct {
	PathParams UpdatePersonalAccessTokenPathParams
	Request    shared.PersonalAccessToken `request:"mediaType=application/json"`
	Security   UpdatePersonalAccessTokenSecurity
}

type UpdatePersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdatePersonalAccessTokenResponse struct {
	ContentType                                           string
	PersonalAccessToken                                   *shared.PersonalAccessToken
	StatusCode                                            int64
	UpdatePersonalAccessTokenDefaultApplicationJSONObject *UpdatePersonalAccessTokenDefaultApplicationJSON
}
