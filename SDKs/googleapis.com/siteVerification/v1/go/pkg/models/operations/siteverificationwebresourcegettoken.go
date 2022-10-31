package operations

import (
	"openapi/pkg/models/shared"
)

type SiteVerificationWebResourceGetTokenQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type SiteVerificationWebResourceGetTokenSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SiteVerificationWebResourceGetTokenSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SiteVerificationWebResourceGetTokenSecurity struct {
	Option1 *SiteVerificationWebResourceGetTokenSecurityOption1 `security:"option"`
	Option2 *SiteVerificationWebResourceGetTokenSecurityOption2 `security:"option"`
}

type SiteVerificationWebResourceGetTokenRequest struct {
	QueryParams SiteVerificationWebResourceGetTokenQueryParams
	Request     *shared.SiteVerificationWebResourceGettokenRequest `request:"mediaType=application/json"`
	Security    SiteVerificationWebResourceGetTokenSecurity
}

type SiteVerificationWebResourceGetTokenResponse struct {
	ContentType                                 string
	SiteVerificationWebResourceGettokenResponse *shared.SiteVerificationWebResourceGettokenResponse
	StatusCode                                  int64
}
