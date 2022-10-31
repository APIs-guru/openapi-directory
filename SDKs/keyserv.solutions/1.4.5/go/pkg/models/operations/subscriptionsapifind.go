package operations



type SubscriptionsAPIFindRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type SubscriptionsAPIFindResponse struct {
    ContentType string 
    StatusCode int64 
    SubscriptionsAPIFind200ApplicationJSONOneOf *interface{} 
    
}

