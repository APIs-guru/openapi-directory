package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostUserInfosListPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type BloggerPostUserInfosListOrderByEnum string

const (
	BloggerPostUserInfosListOrderByEnumOrderByUnspecified BloggerPostUserInfosListOrderByEnum = "ORDER_BY_UNSPECIFIED"
	BloggerPostUserInfosListOrderByEnumPublished          BloggerPostUserInfosListOrderByEnum = "PUBLISHED"
	BloggerPostUserInfosListOrderByEnumUpdated            BloggerPostUserInfosListOrderByEnum = "UPDATED"
)

type BloggerPostUserInfosListStatusEnum string

const (
	BloggerPostUserInfosListStatusEnumLive        BloggerPostUserInfosListStatusEnum = "LIVE"
	BloggerPostUserInfosListStatusEnumDraft       BloggerPostUserInfosListStatusEnum = "DRAFT"
	BloggerPostUserInfosListStatusEnumScheduled   BloggerPostUserInfosListStatusEnum = "SCHEDULED"
	BloggerPostUserInfosListStatusEnumSoftTrashed BloggerPostUserInfosListStatusEnum = "SOFT_TRASHED"
)

type BloggerPostUserInfosListViewEnum string

const (
	BloggerPostUserInfosListViewEnumViewTypeUnspecified BloggerPostUserInfosListViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerPostUserInfosListViewEnumReader              BloggerPostUserInfosListViewEnum = "READER"
	BloggerPostUserInfosListViewEnumAuthor              BloggerPostUserInfosListViewEnum = "AUTHOR"
	BloggerPostUserInfosListViewEnumAdmin               BloggerPostUserInfosListViewEnum = "ADMIN"
)

type BloggerPostUserInfosListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	EndDate        *string                              `queryParam:"style=form,explode=true,name=endDate"`
	FetchBodies    *bool                                `queryParam:"style=form,explode=true,name=fetchBodies"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	Labels         *string                              `queryParam:"style=form,explode=true,name=labels"`
	MaxResults     *int64                               `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *BloggerPostUserInfosListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken      *string                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	StartDate      *string                              `queryParam:"style=form,explode=true,name=startDate"`
	Status         []BloggerPostUserInfosListStatusEnum `queryParam:"style=form,explode=true,name=status"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerPostUserInfosListViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type BloggerPostUserInfosListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostUserInfosListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostUserInfosListSecurity struct {
	Option1 *BloggerPostUserInfosListSecurityOption1 `security:"option"`
	Option2 *BloggerPostUserInfosListSecurityOption2 `security:"option"`
}

type BloggerPostUserInfosListRequest struct {
	PathParams  BloggerPostUserInfosListPathParams
	QueryParams BloggerPostUserInfosListQueryParams
	Security    BloggerPostUserInfosListSecurity
}

type BloggerPostUserInfosListResponse struct {
	ContentType       string
	PostUserInfosList *shared.PostUserInfosList
	StatusCode        int64
}
