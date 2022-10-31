package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsMetricsGetPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type LoggingProjectsMetricsGetQueryParams struct {
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

type LoggingProjectsMetricsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsGetSecurity struct {
	Option1 *LoggingProjectsMetricsGetSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsMetricsGetSecurityOption2 `security:"option"`
	Option3 *LoggingProjectsMetricsGetSecurityOption3 `security:"option"`
	Option4 *LoggingProjectsMetricsGetSecurityOption4 `security:"option"`
}

type LoggingProjectsMetricsGetRequest struct {
	PathParams  LoggingProjectsMetricsGetPathParams
	QueryParams LoggingProjectsMetricsGetQueryParams
	Security    LoggingProjectsMetricsGetSecurity
}

type LoggingProjectsMetricsGetResponse struct {
	ContentType string
	LogMetric   *shared.LogMetric
	StatusCode  int64
}
