package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoMediaDownloadPathParams struct {
	ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
}

type DisplayvideoMediaDownloadQueryParams struct {
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

type DisplayvideoMediaDownloadSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoMediaDownloadSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoMediaDownloadSecurity struct {
	Option1 *DisplayvideoMediaDownloadSecurityOption1 `security:"option"`
	Option2 *DisplayvideoMediaDownloadSecurityOption2 `security:"option"`
}

type DisplayvideoMediaDownloadRequest struct {
	PathParams  DisplayvideoMediaDownloadPathParams
	QueryParams DisplayvideoMediaDownloadQueryParams
	Security    DisplayvideoMediaDownloadSecurity
}

type DisplayvideoMediaDownloadResponse struct {
	ContentType           string
	GoogleBytestreamMedia *shared.GoogleBytestreamMedia
	StatusCode            int64
}
