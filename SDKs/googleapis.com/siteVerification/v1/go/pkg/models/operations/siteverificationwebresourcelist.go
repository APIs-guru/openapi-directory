package operations

import (
	"openapi/pkg/models/shared"
)

type SiteVerificationWebResourceListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type SiteVerificationWebResourceListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SiteVerificationWebResourceListRequest struct {
	QueryParams SiteVerificationWebResourceListQueryParams
	Security    SiteVerificationWebResourceListSecurity
}

type SiteVerificationWebResourceListResponse struct {
	ContentType                             string
	SiteVerificationWebResourceListResponse *shared.SiteVerificationWebResourceListResponse
	StatusCode                              int64
}
