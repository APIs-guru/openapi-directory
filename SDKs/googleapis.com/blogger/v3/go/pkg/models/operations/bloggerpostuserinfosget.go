package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostUserInfosGetPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
	PostID string `pathParam:"style=simple,explode=false,name=postId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type BloggerPostUserInfosGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxComments    *int64            `queryParam:"style=form,explode=true,name=maxComments"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerPostUserInfosGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostUserInfosGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostUserInfosGetSecurity struct {
	Option1 *BloggerPostUserInfosGetSecurityOption1 `security:"option"`
	Option2 *BloggerPostUserInfosGetSecurityOption2 `security:"option"`
}

type BloggerPostUserInfosGetRequest struct {
	PathParams  BloggerPostUserInfosGetPathParams
	QueryParams BloggerPostUserInfosGetQueryParams
	Security    BloggerPostUserInfosGetSecurity
}

type BloggerPostUserInfosGetResponse struct {
	ContentType  string
	PostUserInfo *shared.PostUserInfo
	StatusCode   int64
}
