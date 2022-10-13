package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPostsInsertPathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
}

type BloggerPostsInsertQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	FetchBody      *bool             `queryParam:"style=form,explode=true,name=fetchBody"`
	FetchImages    *bool             `queryParam:"style=form,explode=true,name=fetchImages"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	IsDraft        *bool             `queryParam:"style=form,explode=true,name=isDraft"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerPostsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPostsInsertRequest struct {
	PathParams  BloggerPostsInsertPathParams
	QueryParams BloggerPostsInsertQueryParams
	Request     *shared.Post `request:"mediaType=application/json"`
	Security    BloggerPostsInsertSecurity
}

type BloggerPostsInsertResponse struct {
	ContentType string
	Post        *shared.Post
	StatusCode  int64
}
