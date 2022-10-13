package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsUptimeCheckConfigsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MonitoringProjectsUptimeCheckConfigsCreateQueryParams struct {
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

type MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsUptimeCheckConfigsCreateSecurity struct {
	Option1 *MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2 `security:"option"`
}

type MonitoringProjectsUptimeCheckConfigsCreateRequest struct {
	PathParams  MonitoringProjectsUptimeCheckConfigsCreatePathParams
	QueryParams MonitoringProjectsUptimeCheckConfigsCreateQueryParams
	Request     *shared.UptimeCheckConfig `request:"mediaType=application/json"`
	Security    MonitoringProjectsUptimeCheckConfigsCreateSecurity
}

type MonitoringProjectsUptimeCheckConfigsCreateResponse struct {
	ContentType       string
	StatusCode        int64
	UptimeCheckConfig *shared.UptimeCheckConfig
}
