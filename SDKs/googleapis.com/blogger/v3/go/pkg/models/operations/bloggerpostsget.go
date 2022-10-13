package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostsGetPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
	PostID string `pathParam:"style=simple,explode=false,name=postId"`
}

type BloggerPostsGetViewEnum string

const (
	BloggerPostsGetViewEnumViewTypeUnspecified BloggerPostsGetViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerPostsGetViewEnumReader              BloggerPostsGetViewEnum = "READER"
	BloggerPostsGetViewEnumAuthor              BloggerPostsGetViewEnum = "AUTHOR"
	BloggerPostsGetViewEnumAdmin               BloggerPostsGetViewEnum = "ADMIN"
)

type BloggerPostsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum        `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                  `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum          `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                  `queryParam:"style=form,explode=true,name=callback"`
	FetchBody      *bool                    `queryParam:"style=form,explode=true,name=fetchBody"`
	FetchImages    *bool                    `queryParam:"style=form,explode=true,name=fetchImages"`
	Fields         *string                  `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                  `queryParam:"style=form,explode=true,name=key"`
	MaxComments    *int64                   `queryParam:"style=form,explode=true,name=maxComments"`
	OauthToken     *string                  `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                  `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                  `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                  `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerPostsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type BloggerPostsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsGetSecurity struct {
	Option1 *BloggerPostsGetSecurityOption1 `security:"option"`
	Option2 *BloggerPostsGetSecurityOption2 `security:"option"`
}

type BloggerPostsGetRequest struct {
	PathParams  BloggerPostsGetPathParams
	QueryParams BloggerPostsGetQueryParams
	Security    BloggerPostsGetSecurity
}

type BloggerPostsGetResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
