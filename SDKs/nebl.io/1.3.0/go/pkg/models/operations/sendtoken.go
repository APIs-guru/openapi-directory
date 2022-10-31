package operations

import (
"openapi/pkg/models/shared")

type SendTokenRequest struct {
    Request shared.SendTokenRequest `request:"mediaType=application/json"`
    
}

type SendTokenResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    SendTokenResponse *shared.SendTokenResponse 
    
}

