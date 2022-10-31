package operations

import (
"openapi/pkg/models/shared")

type DeleteSubscriptionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSubscriptionRequest struct {
    PathParams DeleteSubscriptionPathParams 
    
}

type DeleteSubscriptionResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

