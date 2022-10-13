package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPagesListPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
}

type BloggerPagesListStatusEnum string

const (
	BloggerPagesListStatusEnumLive        BloggerPagesListStatusEnum = "LIVE"
	BloggerPagesListStatusEnumDraft       BloggerPagesListStatusEnum = "DRAFT"
	BloggerPagesListStatusEnumSoftTrashed BloggerPagesListStatusEnum = "SOFT_TRASHED"
)

type BloggerPagesListViewEnum string

const (
	BloggerPagesListViewEnumViewTypeUnspecified BloggerPagesListViewEnum = "VIEW_TYPE_UNSPECIFIED"
	BloggerPagesListViewEnumReader              BloggerPagesListViewEnum = "READER"
	BloggerPagesListViewEnumAuthor              BloggerPagesListViewEnum = "AUTHOR"
	BloggerPagesListViewEnumAdmin               BloggerPagesListViewEnum = "ADMIN"
)

type BloggerPagesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum              `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                      `queryParam:"style=form,explode=true,name=callback"`
	FetchBodies    *bool                        `queryParam:"style=form,explode=true,name=fetchBodies"`
	Fields         *string                      `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                      `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                       `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                      `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                      `queryParam:"style=form,explode=true,name=quotaUser"`
	Status         []BloggerPagesListStatusEnum `queryParam:"style=form,explode=true,name=status"`
	UploadType     *string                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                      `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BloggerPagesListViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type BloggerPagesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPagesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPagesListSecurity struct {
	Option1 *BloggerPagesListSecurityOption1 `security:"option"`
	Option2 *BloggerPagesListSecurityOption2 `security:"option"`
}

type BloggerPagesListRequest struct {
	PathParams  BloggerPagesListPathParams
	QueryParams BloggerPagesListQueryParams
	Security    BloggerPagesListSecurity
}

type BloggerPagesListResponse struct {
	ContentType string
	PageList    *shared.PageList
	StatusCode  int64
}
