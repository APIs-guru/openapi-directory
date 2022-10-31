package operations

import (
"openapi/pkg/models/shared")

type GetEndpointInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetEndpointInfoRequest struct {
    Security GetEndpointInfoSecurity 
    
}

type GetEndpointInfoResponse struct {
    ContentType string 
    EndPointInfo *shared.EndPointInfo 
    StatusCode int64 
    
}

