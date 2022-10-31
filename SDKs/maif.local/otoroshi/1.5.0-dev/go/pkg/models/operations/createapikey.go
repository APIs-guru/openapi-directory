package operations

import (
"openapi/pkg/models/shared")

type CreateAPIKeyPathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type CreateAPIKeySecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateAPIKeyRequest struct {
    PathParams CreateAPIKeyPathParams 
    Request *shared.APIKey `request:"mediaType=application/json"`
    Security CreateAPIKeySecurity 
    
}

type CreateAPIKeyResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

