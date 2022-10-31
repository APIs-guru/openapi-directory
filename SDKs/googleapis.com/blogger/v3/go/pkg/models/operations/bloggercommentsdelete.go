package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerCommentsDeletePathParams struct {
	BlogID    string `pathParam:"style=simple,explode=false,name=blogId"`
	CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
	PostID    string `pathParam:"style=simple,explode=false,name=postId"`
}

type BloggerCommentsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerCommentsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerCommentsDeleteRequest struct {
	PathParams  BloggerCommentsDeletePathParams
	QueryParams BloggerCommentsDeleteQueryParams
	Security    BloggerCommentsDeleteSecurity
}

type BloggerCommentsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
