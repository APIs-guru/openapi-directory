package operations

import (
	"openapi/pkg/models/shared"
)

type WebmastersSitemapsListPathParams struct {
	SiteURL string `pathParam:"style=simple,explode=false,name=siteUrl"`
}

type WebmastersSitemapsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SitemapIndex   *string           `queryParam:"style=form,explode=true,name=sitemapIndex"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type WebmastersSitemapsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitemapsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebmastersSitemapsListSecurity struct {
	Option1 *WebmastersSitemapsListSecurityOption1 `security:"option"`
	Option2 *WebmastersSitemapsListSecurityOption2 `security:"option"`
}

type WebmastersSitemapsListRequest struct {
	PathParams  WebmastersSitemapsListPathParams
	QueryParams WebmastersSitemapsListQueryParams
	Security    WebmastersSitemapsListSecurity
}

type WebmastersSitemapsListResponse struct {
	ContentType          string
	SitemapsListResponse *shared.SitemapsListResponse
	StatusCode           int64
}
