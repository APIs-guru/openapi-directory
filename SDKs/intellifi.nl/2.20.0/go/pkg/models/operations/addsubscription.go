package operations

import (
"openapi/pkg/models/shared")

type AddSubscriptionRequest struct {
    Request shared.Subscription `request:"mediaType=application/json"`
    
}

type AddSubscriptionResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

