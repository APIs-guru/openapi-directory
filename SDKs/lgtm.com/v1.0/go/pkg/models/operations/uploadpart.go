package operations

import (
"openapi/pkg/models/shared")

type UploadPartPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=session-id"`
    
}

type UploadPartRequests struct {
    ApplicationOctetStream []byte `request:"mediaType=application/octet-stream"`
    ApplicationZip []byte `request:"mediaType=application/zip"`
    
}

type UploadPartSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UploadPartRequest struct {
    PathParams UploadPartPathParams 
    Request UploadPartRequests 
    Security UploadPartSecurity 
    
}

type UploadPartResponse struct {
    ContentType string 
    StatusCode int64 
    
}

