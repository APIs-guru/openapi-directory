package operations

import (
"openapi/pkg/models/shared")

type GetPhysicalPathsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPhysicalPathsRequest struct {
    Security GetPhysicalPathsSecurity 
    
}

type GetPhysicalPathsResponse struct {
    ContentType string 
    GetPhysicalPaths200ApplicationJSONStrings []string 
    StatusCode int64 
    
}

