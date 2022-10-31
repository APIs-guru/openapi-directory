package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsMetricsDeletePathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type LoggingProjectsMetricsDeleteQueryParams struct {
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

type LoggingProjectsMetricsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsDeleteSecurity struct {
	Option1 *LoggingProjectsMetricsDeleteSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsMetricsDeleteSecurityOption2 `security:"option"`
	Option3 *LoggingProjectsMetricsDeleteSecurityOption3 `security:"option"`
}

type LoggingProjectsMetricsDeleteRequest struct {
	PathParams  LoggingProjectsMetricsDeletePathParams
	QueryParams LoggingProjectsMetricsDeleteQueryParams
	Security    LoggingProjectsMetricsDeleteSecurity
}

type LoggingProjectsMetricsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
