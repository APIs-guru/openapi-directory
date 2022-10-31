package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeVideosReportAbuseQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeVideosReportAbuseSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosReportAbuseSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosReportAbuseSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosReportAbuseSecurity struct {
	Option1 *YoutubeVideosReportAbuseSecurityOption1 `security:"option"`
	Option2 *YoutubeVideosReportAbuseSecurityOption2 `security:"option"`
	Option3 *YoutubeVideosReportAbuseSecurityOption3 `security:"option"`
}

type YoutubeVideosReportAbuseRequest struct {
	QueryParams YoutubeVideosReportAbuseQueryParams
	Request     *shared.VideoAbuseReport `request:"mediaType=application/json"`
	Security    YoutubeVideosReportAbuseSecurity
}

type YoutubeVideosReportAbuseResponse struct {
	ContentType string
	StatusCode  int64
}
