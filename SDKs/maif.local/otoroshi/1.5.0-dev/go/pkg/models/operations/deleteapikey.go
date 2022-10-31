package operations

import (
"openapi/pkg/models/shared")

type DeleteAPIKeyPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type DeleteAPIKeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAPIKeyRequest struct {
    PathParams DeleteAPIKeyPathParams 
    Security DeleteAPIKeySecurity 
    
}

type DeleteAPIKeyResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

