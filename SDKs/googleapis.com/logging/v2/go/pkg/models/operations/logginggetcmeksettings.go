package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingGetCmekSettingsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type LoggingGetCmekSettingsQueryParams struct {
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

type LoggingGetCmekSettingsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingGetCmekSettingsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingGetCmekSettingsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingGetCmekSettingsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingGetCmekSettingsSecurity struct {
	Option1 *LoggingGetCmekSettingsSecurityOption1 `security:"option"`
	Option2 *LoggingGetCmekSettingsSecurityOption2 `security:"option"`
	Option3 *LoggingGetCmekSettingsSecurityOption3 `security:"option"`
	Option4 *LoggingGetCmekSettingsSecurityOption4 `security:"option"`
}

type LoggingGetCmekSettingsRequest struct {
	PathParams  LoggingGetCmekSettingsPathParams
	QueryParams LoggingGetCmekSettingsQueryParams
	Security    LoggingGetCmekSettingsSecurity
}

type LoggingGetCmekSettingsResponse struct {
	CmekSettings *shared.CmekSettings
	ContentType  string
	StatusCode   int64
}
