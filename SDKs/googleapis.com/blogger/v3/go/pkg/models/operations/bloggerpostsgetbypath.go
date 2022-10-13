package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostsGetByPathPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
}

type BloggerPostsGetByPathViewEnum string

const (
	BloggerPostsGetByPathViewEnumViewTypeUnspecified BloggerPostsGetByPathViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerPostsGetByPathViewEnumReader              BloggerPostsGetByPathViewEnum = "READER"
	BloggerPostsGetByPathViewEnumAuthor              BloggerPostsGetByPathViewEnum = "AUTHOR"
	BloggerPostsGetByPathViewEnumAdmin               BloggerPostsGetByPathViewEnum = "ADMIN"
)

type BloggerPostsGetByPathQueryParams struct {
	DollarXgafv    *shared.XgafvEnum              `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                        `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                        `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                        `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                        `queryParam:"style=form,explode=true,name=key"`
	MaxComments    *int64                         `queryParam:"style=form,explode=true,name=maxComments"`
	OauthToken     *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	Path           string                         `queryParam:"style=form,explode=true,name=path"`
	PrettyPrint    *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                        `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                        `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerPostsGetByPathViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type BloggerPostsGetByPathSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsGetByPathSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsGetByPathSecurity struct {
	Option1 *BloggerPostsGetByPathSecurityOption1 `security:"option"`
	Option2 *BloggerPostsGetByPathSecurityOption2 `security:"option"`
}

type BloggerPostsGetByPathRequest struct {
	PathParams  BloggerPostsGetByPathPathParams
	QueryParams BloggerPostsGetByPathQueryParams
	Security    BloggerPostsGetByPathSecurity
}

type BloggerPostsGetByPathResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
