package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerBlogsListByUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type BloggerBlogsListByUserRoleEnum string

const (
	BloggerBlogsListByUserRoleEnumViewTypeUnspecified BloggerBlogsListByUserRoleEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerBlogsListByUserRoleEnumReader              BloggerBlogsListByUserRoleEnum = "READER"
	BloggerBlogsListByUserRoleEnumAuthor              BloggerBlogsListByUserRoleEnum = "AUTHOR"
	BloggerBlogsListByUserRoleEnumAdmin               BloggerBlogsListByUserRoleEnum = "ADMIN"
)

type BloggerBlogsListByUserStatusEnum string

const (
	BloggerBlogsListByUserStatusEnumLive    BloggerBlogsListByUserStatusEnum = "LIVE"
	BloggerBlogsListByUserStatusEnumDeleted BloggerBlogsListByUserStatusEnum = "DELETED"
)

type BloggerBlogsListByUserViewEnum string

const (
	BloggerBlogsListByUserViewEnumViewTypeUnspecified BloggerBlogsListByUserViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerBlogsListByUserViewEnumReader              BloggerBlogsListByUserViewEnum = "READER"
	BloggerBlogsListByUserViewEnumAuthor              BloggerBlogsListByUserViewEnum = "AUTHOR"
	BloggerBlogsListByUserViewEnumAdmin               BloggerBlogsListByUserViewEnum = "ADMIN"
)

type BloggerBlogsListByUserQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                            `queryParam:"style=form,explode=true,name=callback"`
	FetchUserInfo  *bool                              `queryParam:"style=form,explode=true,name=fetchUserInfo"`
	Fields         *string                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	Role           []BloggerBlogsListByUserRoleEnum   `queryParam:"style=form,explode=true,name=role"`
	Status         []BloggerBlogsListByUserStatusEnum `queryParam:"style=form,explode=true,name=status"`
	UploadType     *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerBlogsListByUserViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type BloggerBlogsListByUserSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerBlogsListByUserSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerBlogsListByUserSecurity struct {
	Option1 *BloggerBlogsListByUserSecurityOption1 `security:"option"`
	Option2 *BloggerBlogsListByUserSecurityOption2 `security:"option"`
}

type BloggerBlogsListByUserRequest struct {
	PathParams  BloggerBlogsListByUserPathParams
	QueryParams BloggerBlogsListByUserQueryParams
	Security    BloggerBlogsListByUserSecurity
}

type BloggerBlogsListByUserResponse struct {
	BlogList    *shared.BlogList
	ContentType string
	StatusCode  int64
}
