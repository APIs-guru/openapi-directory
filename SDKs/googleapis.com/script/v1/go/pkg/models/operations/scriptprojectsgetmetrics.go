package operations

import (
	"openapi/pkg/models/shared"
)

type ScriptProjectsGetMetricsPathParams struct {
	ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
}

type ScriptProjectsGetMetricsMetricsGranularityEnum string

const (
	ScriptProjectsGetMetricsMetricsGranularityEnumUnspecifiedGranularity ScriptProjectsGetMetricsMetricsGranularityEnum = "UNSPECIFIED_GRANULARITY"
	ScriptProjectsGetMetricsMetricsGranularityEnumWeekly                 ScriptProjectsGetMetricsMetricsGranularityEnum = "WEEKLY"
	ScriptProjectsGetMetricsMetricsGranularityEnumDaily                  ScriptProjectsGetMetricsMetricsGranularityEnum = "DAILY"
)

type ScriptProjectsGetMetricsQueryParams struct {
	DollarXgafv               *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken               *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt                       *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback                  *string                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields                    *string                                         `queryParam:"style=form,explode=true,name=fields"`
	Key                       *string                                         `queryParam:"style=form,explode=true,name=key"`
	MetricsFilterDeploymentID *string                                         `queryParam:"style=form,explode=true,name=metricsFilter.deploymentId"`
	MetricsGranularity        *ScriptProjectsGetMetricsMetricsGranularityEnum `queryParam:"style=form,explode=true,name=metricsGranularity"`
	OauthToken                *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint               *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol            *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ScriptProjectsGetMetricsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptProjectsGetMetricsRequest struct {
	PathParams  ScriptProjectsGetMetricsPathParams
	QueryParams ScriptProjectsGetMetricsQueryParams
	Security    ScriptProjectsGetMetricsSecurity
}

type ScriptProjectsGetMetricsResponse struct {
	ContentType string
	Metrics     *shared.Metrics
	StatusCode  int64
}
