package operations

import (
"openapi/pkg/models/shared")

type ListActionsPathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type ListActionsRequest struct {
    PathParams ListActionsPathParams 
    
}

type ListActionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    ListActionsResponse *shared.ListActionsResponse 
    StatusCode int64 
    
}

