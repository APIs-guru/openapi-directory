package operations

import (
"openapi/pkg/models/shared")

type UpdateAPIKeyPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type UpdateAPIKeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateAPIKeyRequest struct {
    PathParams UpdateAPIKeyPathParams 
    Request *shared.APIKey `request:"mediaType=application/json"`
    Security UpdateAPIKeySecurity 
    
}

type UpdateAPIKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

