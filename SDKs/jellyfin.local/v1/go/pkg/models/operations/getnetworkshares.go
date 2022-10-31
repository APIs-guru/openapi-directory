package operations

import (
"openapi/pkg/models/shared")

type GetNetworkSharesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNetworkSharesRequest struct {
    Security GetNetworkSharesSecurity 
    
}

type GetNetworkSharesResponse struct {
    ContentType string 
    FileSystemEntryInfos []shared.FileSystemEntryInfo 
    StatusCode int64 
    
}

