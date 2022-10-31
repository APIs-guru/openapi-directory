package operations

import (
"openapi/pkg/models/shared")

type SubscriptionsAPIListQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type SubscriptionsAPIListRequest struct {
    QueryParams SubscriptionsAPIListQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type SubscriptionsAPIListResponse struct {
    ContentType string 
    StatusCode int64 
    SubscriptionViews []shared.SubscriptionView 
    
}

