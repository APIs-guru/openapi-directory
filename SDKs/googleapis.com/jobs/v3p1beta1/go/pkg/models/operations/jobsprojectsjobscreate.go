package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsJobsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type JobsProjectsJobsCreateQueryParams struct {
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

type JobsProjectsJobsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsJobsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsJobsCreateSecurity struct {
    Option1 *JobsProjectsJobsCreateSecurityOption1 `security:"option"`
    Option2 *JobsProjectsJobsCreateSecurityOption2 `security:"option"`
    
}

type JobsProjectsJobsCreateRequest struct {
    PathParams JobsProjectsJobsCreatePathParams 
    QueryParams JobsProjectsJobsCreateQueryParams 
    Request *shared.CreateJobRequest `request:"mediaType=application/json"`
    Security JobsProjectsJobsCreateSecurity 
    
}

type JobsProjectsJobsCreateResponse struct {
    ContentType string 
    Job *shared.Job 
    StatusCode int64 
    
}

