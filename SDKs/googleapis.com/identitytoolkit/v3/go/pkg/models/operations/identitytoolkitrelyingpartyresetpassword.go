package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitRelyingpartyResetPasswordQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type IdentitytoolkitRelyingpartyResetPasswordSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitRelyingpartyResetPasswordRequest struct {
	QueryParams IdentitytoolkitRelyingpartyResetPasswordQueryParams
	Request     *shared.IdentitytoolkitRelyingpartyResetPasswordRequest `request:"mediaType=application/json"`
	Security    IdentitytoolkitRelyingpartyResetPasswordSecurity
}

type IdentitytoolkitRelyingpartyResetPasswordResponse struct {
	ContentType           string
	ResetPasswordResponse *shared.ResetPasswordResponse
	StatusCode            int64
}
