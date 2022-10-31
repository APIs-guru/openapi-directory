package operations

import (
"openapi/pkg/models/shared")

type RetrieveAPISecretPathParams struct {
    APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
    SecretID string `pathParam:"style=simple,explode=false,name=secret_id"`
    
}

type RetrieveAPISecretSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type RetrieveAPISecretRequest struct {
    PathParams RetrieveAPISecretPathParams 
    Security RetrieveAPISecretSecurity 
    
}

type RetrieveAPISecretResponse struct {
    ContentType string 
    StatusCode int64 
    RetrieveAPISecret401ApplicationJSONAny *interface{} 
    RetrieveAPISecret404ApplicationJSONOneOf *interface{} 
    SecretInfo *shared.SecretInfo 
    
}

