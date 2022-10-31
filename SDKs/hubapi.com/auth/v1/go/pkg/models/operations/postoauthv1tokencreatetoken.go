package operations

import (
"openapi/pkg/models/shared")

type PostOauthV1TokenCreateTokenRequest struct {
    Request *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type PostOauthV1TokenCreateTokenResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TokenResponseIf *shared.TokenResponseIf 
    
}

