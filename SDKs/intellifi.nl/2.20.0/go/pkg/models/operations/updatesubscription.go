package operations

import (
"openapi/pkg/models/shared")

type UpdateSubscriptionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateSubscriptionRequest struct {
    PathParams UpdateSubscriptionPathParams 
    Request shared.Subscription `request:"mediaType=application/json"`
    
}

type UpdateSubscriptionResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

