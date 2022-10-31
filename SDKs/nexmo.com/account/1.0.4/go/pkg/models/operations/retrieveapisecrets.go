package operations

import (
"openapi/pkg/models/shared")

type RetrieveAPISecretsPathParams struct {
    APIKey string `pathParam:"style=simple,explode=false,name=api_key"`
    
}

type RetrieveAPISecretsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type RetrieveAPISecretsRequest struct {
    PathParams RetrieveAPISecretsPathParams 
    Security RetrieveAPISecretsSecurity 
    
}

type RetrieveAPISecretsResponse struct {
    ContentType string 
    ErrorAPIKeyNotFound *shared.ErrorAPIKeyNotFound 
    StatusCode int64 
    RetrieveAPISecrets200ApplicationJSONAny *interface{} 
    RetrieveAPISecrets401ApplicationJSONAny *interface{} 
    
}

