package operations



type SubscriptionsAPIDeleteSubscriptionPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type SubscriptionsAPIDeleteSubscriptionQueryParams struct {
    Keep bool `queryParam:"style=form,explode=true,name=keep"`
    
}

type SubscriptionsAPIDeleteSubscriptionHeaders struct {
    XAPIKey string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type SubscriptionsAPIDeleteSubscriptionRequest struct {
    PathParams SubscriptionsAPIDeleteSubscriptionPathParams 
    QueryParams SubscriptionsAPIDeleteSubscriptionQueryParams 
    Headers SubscriptionsAPIDeleteSubscriptionHeaders 
    
}

type SubscriptionsAPIDeleteSubscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

