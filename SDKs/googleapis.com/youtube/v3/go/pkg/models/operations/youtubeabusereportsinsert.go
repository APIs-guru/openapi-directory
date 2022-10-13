package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeAbuseReportsInsertQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeAbuseReportsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAbuseReportsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeAbuseReportsInsertSecurity struct {
	Option1 *YoutubeAbuseReportsInsertSecurityOption1 `security:"option"`
	Option2 *YoutubeAbuseReportsInsertSecurityOption2 `security:"option"`
}

type YoutubeAbuseReportsInsertRequest struct {
	QueryParams YoutubeAbuseReportsInsertQueryParams
	Request     *shared.AbuseReport `request:"mediaType=application/json"`
	Security    YoutubeAbuseReportsInsertSecurity
}

type YoutubeAbuseReportsInsertResponse struct {
	AbuseReport *shared.AbuseReport
	ContentType string
	StatusCode  int64
}
