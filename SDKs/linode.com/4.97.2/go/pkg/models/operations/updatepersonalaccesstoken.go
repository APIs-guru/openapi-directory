package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePersonalAccessTokenPathParams struct {
	TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
}

type UpdatePersonalAccessTokenSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdatePersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdatePersonalAccessTokenRequest struct {
	PathParams UpdatePersonalAccessTokenPathParams
	Request    shared.PersonalAccessTokenInput `request:"mediaType=application/json"`
	Security   UpdatePersonalAccessTokenSecurity
}

type UpdatePersonalAccessTokenResponse struct {
	ContentType                                           string
	PersonalAccessToken                                   *shared.PersonalAccessToken
	StatusCode                                            int64
	UpdatePersonalAccessTokenDefaultApplicationJSONObject *UpdatePersonalAccessTokenDefaultApplicationJSON
}
