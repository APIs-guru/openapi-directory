package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsCreatePathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsLocationsJobsCreateViewEnum string

const (
    DataflowProjectsLocationsJobsCreateViewEnumJobViewUnknown DataflowProjectsLocationsJobsCreateViewEnum = "JOB_VIEW_UNKNOWN"
DataflowProjectsLocationsJobsCreateViewEnumJobViewSummary DataflowProjectsLocationsJobsCreateViewEnum = "JOB_VIEW_SUMMARY"
DataflowProjectsLocationsJobsCreateViewEnumJobViewAll DataflowProjectsLocationsJobsCreateViewEnum = "JOB_VIEW_ALL"
DataflowProjectsLocationsJobsCreateViewEnumJobViewDescription DataflowProjectsLocationsJobsCreateViewEnum = "JOB_VIEW_DESCRIPTION"
)


type DataflowProjectsLocationsJobsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReplaceJobID *string `queryParam:"style=form,explode=true,name=replaceJobId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *DataflowProjectsLocationsJobsCreateViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DataflowProjectsLocationsJobsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsCreateSecurity struct {
    Option1 *DataflowProjectsLocationsJobsCreateSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsCreateSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsCreateSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsCreateSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsCreateRequest struct {
    PathParams DataflowProjectsLocationsJobsCreatePathParams 
    QueryParams DataflowProjectsLocationsJobsCreateQueryParams 
    Request *shared.Job `request:"mediaType=application/json"`
    Security DataflowProjectsLocationsJobsCreateSecurity 
    
}

type DataflowProjectsLocationsJobsCreateResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

