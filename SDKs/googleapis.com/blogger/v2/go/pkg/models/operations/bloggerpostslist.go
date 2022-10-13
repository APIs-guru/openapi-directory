package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostsListPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
}

type BloggerPostsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	FetchBodies    *bool             `queryParam:"style=form,explode=true,name=fetchBodies"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartDate      *string           `queryParam:"style=form,explode=true,name=startDate"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerPostsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
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
