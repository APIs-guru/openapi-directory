package shared

import (
"time")

type HiuSubscriptionRequestReceiptSubscriptionRequest struct {
    ID string `json:"id"`
    
}

type HiuSubscriptionRequestReceipt struct {
    Error *Error `json:"error,omitempty"`
    RequestID string `json:"requestId"`
    Resp RequestReference `json:"resp"`
    SubscriptionRequest *HiuSubscriptionRequestReceiptSubscriptionRequest `json:"subscriptionRequest,omitempty"`
    Timestamp time.Time `json:"timestamp"`
    
}

