package operations

import (
"openapi/pkg/models/shared")

type RedactMessageSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type RedactMessageRequest struct {
    Request shared.RedactTransaction `request:"mediaType=application/json"`
    Security RedactMessageSecurity 
    
}

type RedactMessageResponse struct {
    ContentType string 
    ErrorInvalidID *shared.ErrorInvalidID 
    ErrorThrottled *shared.ErrorThrottled 
    ErrorUnauthorized *shared.ErrorUnauthorized 
    StatusCode int64 
    RedactMessage403ApplicationJSONOneOf *interface{} 
    RedactMessage422ApplicationJSONOneOf *interface{} 
    
}

