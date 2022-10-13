package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitRelyingpartyUploadAccountQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitRelyingpartyUploadAccountSecurity struct {
	Option1 *IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 `security:"option"`
}

type IdentitytoolkitRelyingpartyUploadAccountRequest struct {
	QueryParams IdentitytoolkitRelyingpartyUploadAccountQueryParams
	Request     *shared.IdentitytoolkitRelyingpartyUploadAccountRequest `request:"mediaType=application/json"`
	Security    IdentitytoolkitRelyingpartyUploadAccountSecurity
}

type IdentitytoolkitRelyingpartyUploadAccountResponse struct {
	ContentType           string
	StatusCode            int64
	UploadAccountResponse *shared.UploadAccountResponse
}
