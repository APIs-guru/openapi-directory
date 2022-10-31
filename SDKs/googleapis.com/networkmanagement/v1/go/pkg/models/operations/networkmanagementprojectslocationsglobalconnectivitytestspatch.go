package operations

import (
"openapi/pkg/models/shared")

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams struct {
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

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest struct {
    PathParams NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams 
    QueryParams NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams 
    Request *shared.ConnectivityTest `request:"mediaType=application/json"`
    Security NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity 
    
}

type NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

