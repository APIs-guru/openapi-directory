package operations

import (
"openapi/pkg/models/shared")

type GetDrivesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDrivesRequest struct {
    Security GetDrivesSecurity 
    
}

type GetDrivesResponse struct {
    ContentType string 
    FileSystemEntryInfos []shared.FileSystemEntryInfo 
    StatusCode int64 
    
}

