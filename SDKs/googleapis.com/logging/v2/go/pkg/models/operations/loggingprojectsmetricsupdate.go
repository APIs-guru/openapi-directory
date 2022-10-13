package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsMetricsUpdatePathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type LoggingProjectsMetricsUpdateQueryParams struct {
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

type LoggingProjectsMetricsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsUpdateSecurity struct {
	Option1 *LoggingProjectsMetricsUpdateSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsMetricsUpdateSecurityOption2 `security:"option"`
	Option3 *LoggingProjectsMetricsUpdateSecurityOption3 `security:"option"`
}

type LoggingProjectsMetricsUpdateRequest struct {
	PathParams  LoggingProjectsMetricsUpdatePathParams
	QueryParams LoggingProjectsMetricsUpdateQueryParams
	Request     *shared.LogMetric `request:"mediaType=application/json"`
	Security    LoggingProjectsMetricsUpdateSecurity
}

type LoggingProjectsMetricsUpdateResponse struct {
	ContentType string
	LogMetric   *shared.LogMetric
	StatusCode  int64
}
