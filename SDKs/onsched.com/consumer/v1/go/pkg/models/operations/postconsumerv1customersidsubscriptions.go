package operations

import (
"openapi/pkg/models/shared")

type PostConsumerV1CustomersIDSubscriptionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostConsumerV1CustomersIDSubscriptionsRequests struct {
    CustomerSubscriptionInputModel *shared.CustomerSubscriptionInputModel `request:"mediaType=application/*+json"`
    CustomerSubscriptionInputModel1 *shared.CustomerSubscriptionInputModel `request:"mediaType=application/json"`
    CustomerSubscriptionInputModel2 *shared.CustomerSubscriptionInputModel `request:"mediaType=application/json-patch+json"`
    CustomerSubscriptionInputModel3 *shared.CustomerSubscriptionInputModel `request:"mediaType=text/json"`
    
}

type PostConsumerV1CustomersIDSubscriptionsRequest struct {
    PathParams PostConsumerV1CustomersIDSubscriptionsPathParams 
    Request *PostConsumerV1CustomersIDSubscriptionsRequests 
    
}

type PostConsumerV1CustomersIDSubscriptionsResponse struct {
    ContentType string 
    CustomerSubscriptionViewModel *shared.CustomerSubscriptionViewModel 
    StatusCode int64 
    
}

