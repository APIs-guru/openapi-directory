package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsNotificationChannelsSendVerificationCodePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsNotificationChannelsSendVerificationCodeQueryParams struct {
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

type MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity struct {
	Option1 *MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2 `security:"option"`
}

type MonitoringProjectsNotificationChannelsSendVerificationCodeRequest struct {
	PathParams  MonitoringProjectsNotificationChannelsSendVerificationCodePathParams
	QueryParams MonitoringProjectsNotificationChannelsSendVerificationCodeQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity
}

type MonitoringProjectsNotificationChannelsSendVerificationCodeResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
