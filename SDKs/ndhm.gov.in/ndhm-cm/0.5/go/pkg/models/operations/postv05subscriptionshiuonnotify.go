package operations

import (
"openapi/pkg/models/shared")

type PostV05SubscriptionsHiuOnNotifyHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostV05SubscriptionsHiuOnNotifyRequest struct {
    Headers PostV05SubscriptionsHiuOnNotifyHeaders 
    Request shared.HiuSubscriptionNotificationAcknowledgment `request:"mediaType=application/json"`
    
}

type PostV05SubscriptionsHiuOnNotifyResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

