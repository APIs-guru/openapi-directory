package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsGetMetricsPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsGetMetricsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Location       *string           `queryParam:"style=form,explode=true,name=location"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime      *string           `queryParam:"style=form,explode=true,name=startTime"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsJobsGetMetricsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsGetMetricsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsGetMetricsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsGetMetricsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsGetMetricsSecurity struct {
	Option1 *DataflowProjectsJobsGetMetricsSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsGetMetricsSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsGetMetricsSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsGetMetricsSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsGetMetricsRequest struct {
	PathParams  DataflowProjectsJobsGetMetricsPathParams
	QueryParams DataflowProjectsJobsGetMetricsQueryParams
	Security    DataflowProjectsJobsGetMetricsSecurity
}

type DataflowProjectsJobsGetMetricsResponse struct {
	ContentType string
	JobMetrics  *shared.JobMetrics
	StatusCode  int64
}
