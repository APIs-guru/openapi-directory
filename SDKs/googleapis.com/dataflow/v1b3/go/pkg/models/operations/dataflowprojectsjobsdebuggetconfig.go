package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsDebugGetConfigPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsJobsDebugGetConfigQueryParams struct {
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
    
}

type DataflowProjectsJobsDebugGetConfigSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsDebugGetConfigSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsDebugGetConfigSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsDebugGetConfigSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsDebugGetConfigSecurity struct {
    Option1 *DataflowProjectsJobsDebugGetConfigSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsDebugGetConfigSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsDebugGetConfigSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsDebugGetConfigSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsDebugGetConfigRequest struct {
    PathParams DataflowProjectsJobsDebugGetConfigPathParams 
    QueryParams DataflowProjectsJobsDebugGetConfigQueryParams 
    Request *shared.GetDebugConfigRequest `request:"mediaType=application/json"`
    Security DataflowProjectsJobsDebugGetConfigSecurity 
    
}

type DataflowProjectsJobsDebugGetConfigResponse struct {
    ContentType string 
    GetDebugConfigResponse *shared.GetDebugConfigResponse 
    StatusCode int64 
    
}

