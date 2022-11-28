package operations

import (
	"openapi/pkg/models/shared"
)

type ChatMediaDownloadPathParams struct {
	ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
}

type ChatMediaDownloadQueryParams struct {
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

type ChatMediaDownloadSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChatMediaDownloadSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChatMediaDownloadSecurity struct {
	Option1 *ChatMediaDownloadSecurityOption1 `security:"option"`
	Option2 *ChatMediaDownloadSecurityOption2 `security:"option"`
}

type ChatMediaDownloadRequest struct {
	PathParams  ChatMediaDownloadPathParams
	QueryParams ChatMediaDownloadQueryParams
	Security    ChatMediaDownloadSecurity
}

type ChatMediaDownloadResponse struct {
	ContentType string
	Media       *shared.Media
	StatusCode  int64
}
