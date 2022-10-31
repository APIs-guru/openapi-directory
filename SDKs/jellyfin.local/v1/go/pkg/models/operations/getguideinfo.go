package operations

import (
"openapi/pkg/models/shared")

type GetGuideInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetGuideInfoRequest struct {
    Security GetGuideInfoSecurity 
    
}

type GetGuideInfoResponse struct {
    ContentType string 
    GuideInfo *shared.GuideInfo 
    StatusCode int64 
    
}

