package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSubscriptionByIDRequest struct {
    PathParams GetSubscriptionByIDPathParams 
    
}

type GetSubscriptionByIDResponse struct {
    ContentType string 
    StatusCode int64 
    Subscription *shared.Subscription 
    
}

