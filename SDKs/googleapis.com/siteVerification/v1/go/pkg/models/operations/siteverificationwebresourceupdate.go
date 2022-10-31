package operations

import (
	"openapi/pkg/models/shared"
)

type SiteVerificationWebResourceUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SiteVerificationWebResourceUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type SiteVerificationWebResourceUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SiteVerificationWebResourceUpdateRequest struct {
	PathParams  SiteVerificationWebResourceUpdatePathParams
	QueryParams SiteVerificationWebResourceUpdateQueryParams
	Request     *shared.SiteVerificationWebResourceResource `request:"mediaType=application/json"`
	Security    SiteVerificationWebResourceUpdateSecurity
}

type SiteVerificationWebResourceUpdateResponse struct {
	ContentType                         string
	SiteVerificationWebResourceResource *shared.SiteVerificationWebResourceResource
	StatusCode                          int64
}
