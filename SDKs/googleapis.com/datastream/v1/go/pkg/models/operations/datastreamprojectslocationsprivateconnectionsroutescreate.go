package operations

import (
"openapi/pkg/models/shared")

type DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestID *string `queryParam:"style=form,explode=true,name=requestId"`
    RouteID *string `queryParam:"style=form,explode=true,name=routeId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest struct {
    PathParams DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams 
    QueryParams DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams 
    Request *shared.Route `request:"mediaType=application/json"`
    Security DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity 
    
}

type DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

