package operations

import (
"openapi/pkg/models/shared")

type ClouddeployProjectsLocationsTargetsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ClouddeployProjectsLocationsTargetsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AllowMissing *bool `queryParam:"style=form,explode=true,name=allowMissing"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID *string `queryParam:"style=form,explode=true,name=requestId"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValidateOnly *bool `queryParam:"style=form,explode=true,name=validateOnly"`
    
}

type ClouddeployProjectsLocationsTargetsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddeployProjectsLocationsTargetsPatchRequest struct {
    PathParams ClouddeployProjectsLocationsTargetsPatchPathParams 
    QueryParams ClouddeployProjectsLocationsTargetsPatchQueryParams 
    Request *shared.Target `request:"mediaType=application/json"`
    Security ClouddeployProjectsLocationsTargetsPatchSecurity 
    
}

type ClouddeployProjectsLocationsTargetsPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

