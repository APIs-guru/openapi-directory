package operations

import (
"openapi/pkg/models/shared")

type CompleteUploadPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=session-id"`
    
}

type CompleteUploadSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CompleteUploadRequest struct {
    PathParams CompleteUploadPathParams 
    Security CompleteUploadSecurity 
    
}

type CompleteUploadResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

