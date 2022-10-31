package operations

import (
"openapi/pkg/models/shared")

type PostV05SubscriptionRequestsHiuOnNotifyHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCmID string `header:"style=simple,explode=false,name=X-CM-ID"`
    
}

type PostV05SubscriptionRequestsHiuOnNotifyRequest struct {
    Headers PostV05SubscriptionRequestsHiuOnNotifyHeaders 
    Request shared.HiuSubscriptionRequestNotificationAcknowledgement `request:"mediaType=application/json"`
    
}

type PostV05SubscriptionRequestsHiuOnNotifyResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

