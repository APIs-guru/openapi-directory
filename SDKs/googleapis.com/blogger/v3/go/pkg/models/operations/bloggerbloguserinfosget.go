package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerBlogUserInfosGetPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type BloggerBlogUserInfosGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxPosts       *int64            `queryParam:"style=form,explode=true,name=maxPosts"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerBlogUserInfosGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerBlogUserInfosGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerBlogUserInfosGetSecurity struct {
	Option1 *BloggerBlogUserInfosGetSecurityOption1 `security:"option"`
	Option2 *BloggerBlogUserInfosGetSecurityOption2 `security:"option"`
}

type BloggerBlogUserInfosGetRequest struct {
	PathParams  BloggerBlogUserInfosGetPathParams
	QueryParams BloggerBlogUserInfosGetQueryParams
	Security    BloggerBlogUserInfosGetSecurity
}

type BloggerBlogUserInfosGetResponse struct {
	BlogUserInfo *shared.BlogUserInfo
	ContentType  string
	StatusCode   int64
}
