package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsMetricsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type LoggingProjectsMetricsCreateQueryParams struct {
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

type LoggingProjectsMetricsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsMetricsCreateSecurity struct {
	Option1 *LoggingProjectsMetricsCreateSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsMetricsCreateSecurityOption2 `security:"option"`
	Option3 *LoggingProjectsMetricsCreateSecurityOption3 `security:"option"`
}

type LoggingProjectsMetricsCreateRequest struct {
	PathParams  LoggingProjectsMetricsCreatePathParams
	QueryParams LoggingProjectsMetricsCreateQueryParams
	Request     *shared.LogMetric `request:"mediaType=application/json"`
	Security    LoggingProjectsMetricsCreateSecurity
}

type LoggingProjectsMetricsCreateResponse struct {
	ContentType string
	LogMetric   *shared.LogMetric
	StatusCode  int64
}
