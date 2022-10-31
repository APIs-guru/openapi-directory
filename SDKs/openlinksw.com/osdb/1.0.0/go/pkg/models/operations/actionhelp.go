package operations

import (
"openapi/pkg/models/shared")

type ActionHelpPathParams struct {
    ActionID string `pathParam:"style=simple,explode=false,name=actionId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type ActionHelpRequest struct {
    PathParams ActionHelpPathParams 
    
}

type ActionHelpResponse struct {
    ActionHelpResponse *shared.ActionHelpResponse 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

