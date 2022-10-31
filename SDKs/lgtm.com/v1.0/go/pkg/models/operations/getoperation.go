package operations

import (
"openapi/pkg/models/shared")

type GetOperationPathParams struct {
    OperationID int64 `pathParam:"style=simple,explode=false,name=operation-id"`
    
}

type GetOperationSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetOperationRequest struct {
    PathParams GetOperationPathParams 
    Security GetOperationSecurity 
    
}

type GetOperationResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

