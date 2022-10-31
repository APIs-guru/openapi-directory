package operations

import (
"openapi/pkg/models/shared")

type CloudbuildProjectsLocationsWorkerPoolsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbuildProjectsLocationsWorkerPoolsPatchRequest struct {
    PathParams CloudbuildProjectsLocationsWorkerPoolsPatchPathParams 
    QueryParams CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams 
    Request *shared.WorkerPool `request:"mediaType=application/json"`
    Security CloudbuildProjectsLocationsWorkerPoolsPatchSecurity 
    
}

type CloudbuildProjectsLocationsWorkerPoolsPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

