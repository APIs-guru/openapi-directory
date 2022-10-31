package operations

import (
"openapi/pkg/models/shared")

type PostAdministrationTokenHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostAdministrationTokenRequests struct {
    NewTokenRequest *shared.NewTokenRequest `request:"mediaType=application/*+json"`
    NewTokenRequest1 *shared.NewTokenRequest `request:"mediaType=application/json"`
    NewTokenRequest2 *shared.NewTokenRequest `request:"mediaType=text/json"`
    
}

type PostAdministrationTokenRequest struct {
    Headers PostAdministrationTokenHeaders 
    Request *PostAdministrationTokenRequests 
    
}

type PostAdministrationTokenResponse struct {
    ContentType string 
    PostAdministrationToken200ApplicationJSONUUIDString *string 
    PostAdministrationToken200TextJSONUUIDString *string 
    PostAdministrationToken200TextPlainUUIDString *string 
    StatusCode int64 
    
}

