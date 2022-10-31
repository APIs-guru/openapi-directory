package operations

import (
"openapi/pkg/models/shared")

type ExecuteActionPathParams struct {
    ActionID string `pathParam:"style=simple,explode=false,name=actionId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type ExecuteActionRequest struct {
    PathParams ExecuteActionPathParams 
    Request *shared.ExecBody `request:"mediaType=application/json"`
    
}

type ExecuteActionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

