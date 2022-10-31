package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsUpdatePathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsJobsUpdateQueryParams struct {
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
    
}

type DataflowProjectsJobsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsUpdateSecurity struct {
    Option1 *DataflowProjectsJobsUpdateSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsUpdateSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsUpdateSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsUpdateSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsUpdateRequest struct {
    PathParams DataflowProjectsJobsUpdatePathParams 
    QueryParams DataflowProjectsJobsUpdateQueryParams 
    Request *shared.Job `request:"mediaType=application/json"`
    Security DataflowProjectsJobsUpdateSecurity 
    
}

type DataflowProjectsJobsUpdateResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

