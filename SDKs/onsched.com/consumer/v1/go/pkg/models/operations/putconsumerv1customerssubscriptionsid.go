package operations

import (
"openapi/pkg/models/shared")

type PutConsumerV1CustomersSubscriptionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutConsumerV1CustomersSubscriptionsIDRequests struct {
    CustomerSubscriptionUpdateModel *shared.CustomerSubscriptionUpdateModel `request:"mediaType=application/*+json"`
    CustomerSubscriptionUpdateModel1 *shared.CustomerSubscriptionUpdateModel `request:"mediaType=application/json"`
    CustomerSubscriptionUpdateModel2 *shared.CustomerSubscriptionUpdateModel `request:"mediaType=application/json-patch+json"`
    CustomerSubscriptionUpdateModel3 *shared.CustomerSubscriptionUpdateModel `request:"mediaType=text/json"`
    
}

type PutConsumerV1CustomersSubscriptionsIDRequest struct {
    PathParams PutConsumerV1CustomersSubscriptionsIDPathParams 
    Request *PutConsumerV1CustomersSubscriptionsIDRequests 
    
}

type PutConsumerV1CustomersSubscriptionsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

