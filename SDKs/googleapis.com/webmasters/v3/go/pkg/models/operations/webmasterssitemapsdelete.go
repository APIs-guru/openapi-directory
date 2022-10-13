package operations

import (
	"openapi/pkg/models/shared"
)

type WebmastersSitemapsDeletePathParams struct {
	Feedpath string `pathParam:"style=simple,explode=false,name=feedpath"`
	SiteURL  string `pathParam:"style=simple,explode=false,name=siteUrl"`
}

type WebmastersSitemapsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type WebmastersSitemapsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitemapsDeleteRequest struct {
	PathParams  WebmastersSitemapsDeletePathParams
	QueryParams WebmastersSitemapsDeleteQueryParams
	Security    WebmastersSitemapsDeleteSecurity
}

type WebmastersSitemapsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
