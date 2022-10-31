package operations

import (
"openapi/pkg/models/shared")

type GetFallbackFontListSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFallbackFontListRequest struct {
    Security GetFallbackFontListSecurity 
    
}

type GetFallbackFontListResponse struct {
    ContentType string 
    FontFiles []shared.FontFile 
    StatusCode int64 
    
}

