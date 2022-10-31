package operations



type SubscriptionsAPIDeleteSubscription2PathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type SubscriptionsAPIDeleteSubscription2QueryParams struct {
    Keep bool `queryParam:"style=form,explode=true,name=keep"`
    
}

type SubscriptionsAPIDeleteSubscription2Headers struct {
    XAPIKey string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type SubscriptionsAPIDeleteSubscription2Request struct {
    PathParams SubscriptionsAPIDeleteSubscription2PathParams 
    QueryParams SubscriptionsAPIDeleteSubscription2QueryParams 
    Headers SubscriptionsAPIDeleteSubscription2Headers 
    
}

type SubscriptionsAPIDeleteSubscription2Response struct {
    ContentType string 
    StatusCode int64 
    
}

