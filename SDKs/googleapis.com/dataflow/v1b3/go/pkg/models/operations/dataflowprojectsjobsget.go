package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsGetPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsJobsGetViewEnum string

const (
    DataflowProjectsJobsGetViewEnumJobViewUnknown DataflowProjectsJobsGetViewEnum = "JOB_VIEW_UNKNOWN"
DataflowProjectsJobsGetViewEnumJobViewSummary DataflowProjectsJobsGetViewEnum = "JOB_VIEW_SUMMARY"
DataflowProjectsJobsGetViewEnumJobViewAll DataflowProjectsJobsGetViewEnum = "JOB_VIEW_ALL"
DataflowProjectsJobsGetViewEnumJobViewDescription DataflowProjectsJobsGetViewEnum = "JOB_VIEW_DESCRIPTION"
)


type DataflowProjectsJobsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataflowProjectsJobsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataflowProjectsJobsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsGetSecurity struct {
    Option1 *DataflowProjectsJobsGetSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsGetSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsGetSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsGetSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsGetRequest struct {
    PathParams DataflowProjectsJobsGetPathParams 
    QueryParams DataflowProjectsJobsGetQueryParams 
    Security DataflowProjectsJobsGetSecurity 
    
}

type DataflowProjectsJobsGetResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

