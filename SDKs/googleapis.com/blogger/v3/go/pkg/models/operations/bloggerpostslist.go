package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostsListPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
}

type BloggerPostsListOrderByEnum string

const (
	BloggerPostsListOrderByEnumOrderByUnspecified BloggerPostsListOrderByEnum = "ORDER_BY_UNSPECIFIED"
	BloggerPostsListOrderByEnumPublished          BloggerPostsListOrderByEnum = "PUBLISHED"
	BloggerPostsListOrderByEnumUpdated            BloggerPostsListOrderByEnum = "UPDATED"
)

type BloggerPostsListStatusEnum string

const (
	BloggerPostsListStatusEnumLive        BloggerPostsListStatusEnum = "LIVE"
	BloggerPostsListStatusEnumDraft       BloggerPostsListStatusEnum = "DRAFT"
	BloggerPostsListStatusEnumScheduled   BloggerPostsListStatusEnum = "SCHEDULED"
	BloggerPostsListStatusEnumSoftTrashed BloggerPostsListStatusEnum = "SOFT_TRASHED"
)

type BloggerPostsListViewEnum string

const (
	BloggerPostsListViewEnumViewTypeUnspecified BloggerPostsListViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerPostsListViewEnumReader              BloggerPostsListViewEnum = "READER"
	BloggerPostsListViewEnumAuthor              BloggerPostsListViewEnum = "AUTHOR"
	BloggerPostsListViewEnumAdmin               BloggerPostsListViewEnum = "ADMIN"
)

type BloggerPostsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum              `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                      `queryParam:"style=form,explode=true,name=callback"`
	EndDate        *string                      `queryParam:"style=form,explode=true,name=endDate"`
	FetchBodies    *bool                        `queryParam:"style=form,explode=true,name=fetchBodies"`
	FetchImages    *bool                        `queryParam:"style=form,explode=true,name=fetchImages"`
	Fields         *string                      `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                      `queryParam:"style=form,explode=true,name=key"`
	Labels         *string                      `queryParam:"style=form,explode=true,name=labels"`
	MaxResults     *int64                       `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                      `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *BloggerPostsListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken      *string                      `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                      `queryParam:"style=form,explode=true,name=quotaUser"`
	StartDate      *string                      `queryParam:"style=form,explode=true,name=startDate"`
	Status         []BloggerPostsListStatusEnum `queryParam:"style=form,explode=true,name=status"`
	UploadType     *string                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                      `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerPostsListViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type BloggerPostsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsListSecurity struct {
	Option1 *BloggerPostsListSecurityOption1 `security:"option"`
	Option2 *BloggerPostsListSecurityOption2 `security:"option"`
}

type BloggerPostsListRequest struct {
	PathParams  BloggerPostsListPathParams
	QueryParams BloggerPostsListQueryParams
	Security    BloggerPostsListSecurity
}

type BloggerPostsListResponse struct {
	ContentType string
	PostList    *shared.PostList
	StatusCode  int64
}
