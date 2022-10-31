package operations

import (
"openapi/pkg/models/shared")

type AbortUploadPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=session-id"`
    
}

type AbortUploadSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AbortUploadRequest struct {
    PathParams AbortUploadPathParams 
    Security AbortUploadSecurity 
    
}

type AbortUploadResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

