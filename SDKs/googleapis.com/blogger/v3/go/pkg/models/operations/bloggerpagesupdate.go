package operations

import (
	"openapi/pkg/models/shared"
)

type BloggerPagesUpdatePathParams struct {
	BlogID string `pathParam:"style=simple,explode=false,name=blogId"`
	PageID string `pathParam:"style=simple,explode=false,name=pageId"`
}

type BloggerPagesUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Publish        *bool             `queryParam:"style=form,explode=true,name=publish"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Revert         *bool             `queryParam:"style=form,explode=true,name=revert"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BloggerPagesUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BloggerPagesUpdateRequest struct {
	PathParams  BloggerPagesUpdatePathParams
	QueryParams BloggerPagesUpdateQueryParams
	Request     *shared.Page `request:"mediaType=application/json"`
	Security    BloggerPagesUpdateSecurity
}

type BloggerPagesUpdateResponse struct {
	ContentType string
	Page        *shared.Page
	StatusCode  int64
}
