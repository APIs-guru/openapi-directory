package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsGetPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsLocationsJobsGetViewEnum string

const (
    DataflowProjectsLocationsJobsGetViewEnumJobViewUnknown DataflowProjectsLocationsJobsGetViewEnum = "JOB_VIEW_UNKNOWN"
DataflowProjectsLocationsJobsGetViewEnumJobViewSummary DataflowProjectsLocationsJobsGetViewEnum = "JOB_VIEW_SUMMARY"
DataflowProjectsLocationsJobsGetViewEnumJobViewAll DataflowProjectsLocationsJobsGetViewEnum = "JOB_VIEW_ALL"
DataflowProjectsLocationsJobsGetViewEnumJobViewDescription DataflowProjectsLocationsJobsGetViewEnum = "JOB_VIEW_DESCRIPTION"
)


type DataflowProjectsLocationsJobsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataflowProjectsLocationsJobsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataflowProjectsLocationsJobsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsGetSecurity struct {
    Option1 *DataflowProjectsLocationsJobsGetSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsGetSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsGetSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsGetSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsGetRequest struct {
    PathParams DataflowProjectsLocationsJobsGetPathParams 
    QueryParams DataflowProjectsLocationsJobsGetQueryParams 
    Security DataflowProjectsLocationsJobsGetSecurity 
    
}

type DataflowProjectsLocationsJobsGetResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

