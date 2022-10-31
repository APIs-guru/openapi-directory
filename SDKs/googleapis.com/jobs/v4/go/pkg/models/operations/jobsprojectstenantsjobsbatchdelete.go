package operations

import (
"openapi/pkg/models/shared")

type JobsProjectsTenantsJobsBatchDeletePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type JobsProjectsTenantsJobsBatchDeleteQueryParams struct {
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

type JobsProjectsTenantsJobsBatchDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsJobsBatchDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type JobsProjectsTenantsJobsBatchDeleteSecurity struct {
    Option1 *JobsProjectsTenantsJobsBatchDeleteSecurityOption1 `security:"option"`
    Option2 *JobsProjectsTenantsJobsBatchDeleteSecurityOption2 `security:"option"`
    
}

type JobsProjectsTenantsJobsBatchDeleteRequest struct {
    PathParams JobsProjectsTenantsJobsBatchDeletePathParams 
    QueryParams JobsProjectsTenantsJobsBatchDeleteQueryParams 
    Request *shared.BatchDeleteJobsRequest `request:"mediaType=application/json"`
    Security JobsProjectsTenantsJobsBatchDeleteSecurity 
    
}

type JobsProjectsTenantsJobsBatchDeleteResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

