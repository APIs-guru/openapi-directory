package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1CustomersSubscriptionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1CustomersSubscriptionsIDRequest struct {
    PathParams GetConsumerV1CustomersSubscriptionsIDPathParams 
    
}

type GetConsumerV1CustomersSubscriptionsIDResponse struct {
    ContentType string 
    CustomerSubscriptionViewModel *shared.CustomerSubscriptionViewModel 
    StatusCode int64 
    
}

