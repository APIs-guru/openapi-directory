package operations

import (
"openapi/pkg/models/shared")

type ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PeeringID *string `queryParam:"style=form,explode=true,name=peeringId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest struct {
    PathParams ManagedidentitiesProjectsLocationsGlobalPeeringsCreatePathParams 
    QueryParams ManagedidentitiesProjectsLocationsGlobalPeeringsCreateQueryParams 
    Request *shared.Peering `request:"mediaType=application/json"`
    Security ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity 
    
}

type ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

