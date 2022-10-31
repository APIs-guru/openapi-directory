package operations

import (
"openapi/pkg/models/shared")

type RestartApplicationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type RestartApplicationRequest struct {
    Security RestartApplicationSecurity 
    
}

type RestartApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

