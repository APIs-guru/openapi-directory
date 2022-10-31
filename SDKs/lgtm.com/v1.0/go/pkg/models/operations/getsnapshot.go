package operations

import (
"openapi/pkg/models/shared")

type GetSnapshotPathParams struct {
    Language string `pathParam:"style=simple,explode=false,name=language"`
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type GetSnapshotSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSnapshotRequest struct {
    PathParams GetSnapshotPathParams 
    Security GetSnapshotSecurity 
    
}

type GetSnapshotResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

