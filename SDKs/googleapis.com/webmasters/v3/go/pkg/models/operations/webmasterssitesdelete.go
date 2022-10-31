package operations

import (
	"openapi/pkg/models/shared"
)

type WebmastersSitesDeletePathParams struct {
	SiteURL string `pathParam:"style=simple,explode=false,name=siteUrl"`
}

type WebmastersSitesDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type WebmastersSitesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitesDeleteRequest struct {
	PathParams  WebmastersSitesDeletePathParams
	QueryParams WebmastersSitesDeleteQueryParams
	Security    WebmastersSitesDeleteSecurity
}

type WebmastersSitesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
