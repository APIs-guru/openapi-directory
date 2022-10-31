package operations

import (
"openapi/pkg/models/shared")

type BurnTokenRequest struct {
    Request shared.BurnTokenRequest `request:"mediaType=application/json"`
    
}

type BurnTokenResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    BurnTokenResponse *shared.BurnTokenResponse 
    
}

