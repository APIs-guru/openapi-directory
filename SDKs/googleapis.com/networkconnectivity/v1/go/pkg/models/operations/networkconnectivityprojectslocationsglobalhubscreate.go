package operations

import (
"openapi/pkg/models/shared")

type NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    HubID *string `queryParam:"style=form,explode=true,name=hubId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID *string `queryParam:"style=form,explode=true,name=requestId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest struct {
    PathParams NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams 
    QueryParams NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams 
    Request *shared.Hub `request:"mediaType=application/json"`
    Security NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity 
    
}

type NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

