package operations

import (
	"openapi/pkg/models/shared"
)

type WebmastersSitemapsGetPathParams struct {
	Feedpath string `pathParam:"style=simple,explode=false,name=feedpath"`
	SiteURL  string `pathParam:"style=simple,explode=false,name=siteUrl"`
}

type WebmastersSitemapsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type WebmastersSitemapsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitemapsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitemapsGetSecurity struct {
	Option1 *WebmastersSitemapsGetSecurityOption1 `security:"option"`
	Option2 *WebmastersSitemapsGetSecurityOption2 `security:"option"`
}

type WebmastersSitemapsGetRequest struct {
	PathParams  WebmastersSitemapsGetPathParams
	QueryParams WebmastersSitemapsGetQueryParams
	Security    WebmastersSitemapsGetSecurity
}

type WebmastersSitemapsGetResponse struct {
	ContentType string
	StatusCode  int64
	WmxSitemap  *shared.WmxSitemap
}
