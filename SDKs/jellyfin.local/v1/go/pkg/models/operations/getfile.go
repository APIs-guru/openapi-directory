package operations

import (
"openapi/pkg/models/shared")

type GetFilePathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetFileSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFileRequest struct {
    PathParams GetFilePathParams 
    Security GetFileSecurity 
    
}

type GetFileResponse struct {
    ContentType string 
    GetFile200AudioWildcardBinaryString []byte 
    GetFile200VideoWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

