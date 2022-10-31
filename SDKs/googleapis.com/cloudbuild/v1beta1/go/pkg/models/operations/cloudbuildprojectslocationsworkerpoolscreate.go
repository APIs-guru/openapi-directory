package operations

import (
"openapi/pkg/models/shared")

type CloudbuildProjectsLocationsWorkerPoolsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams struct {
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
    WorkerPoolID *string `queryParam:"style=form,explode=true,name=workerPoolId"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsCreateRequest struct {
    PathParams CloudbuildProjectsLocationsWorkerPoolsCreatePathParams 
    QueryParams CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams 
    Request *shared.WorkerPool `request:"mediaType=application/json"`
    Security CloudbuildProjectsLocationsWorkerPoolsCreateSecurity 
    
}

type CloudbuildProjectsLocationsWorkerPoolsCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

