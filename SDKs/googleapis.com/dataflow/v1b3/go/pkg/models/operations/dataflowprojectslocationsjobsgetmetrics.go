package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsGetMetricsPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsLocationsJobsGetMetricsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DataflowProjectsLocationsJobsGetMetricsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetMetricsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetMetricsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetMetricsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetMetricsSecurity struct {
    Option1 *DataflowProjectsLocationsJobsGetMetricsSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsGetMetricsSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsGetMetricsSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsGetMetricsSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsGetMetricsRequest struct {
    PathParams DataflowProjectsLocationsJobsGetMetricsPathParams 
    QueryParams DataflowProjectsLocationsJobsGetMetricsQueryParams 
    Security DataflowProjectsLocationsJobsGetMetricsSecurity 
    
}

type DataflowProjectsLocationsJobsGetMetricsResponse struct {
    ContentType string 
    JobMetrics *shared.JobMetrics 
    StatusCode int64 
    
}

