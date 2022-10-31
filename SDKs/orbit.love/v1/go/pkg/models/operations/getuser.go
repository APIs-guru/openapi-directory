package operations

import (
"openapi/pkg/models/shared")

type GetUserSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUserRequest struct {
    Security GetUserSecurity 
    
}

type GetUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

