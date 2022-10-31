package shared

import (
"time")

type HiuSubscriptionNotificationEvent struct {
    Category SubscriptionCategoryEnum `json:"category"`
    Content HiuSubscriptionEventContent `json:"content"`
    ID string `json:"id"`
    Published time.Time `json:"published"`
    SubscriptionID string `json:"subscriptionId"`
    
}

type HiuSubscriptionNotification struct {
    Event HiuSubscriptionNotificationEvent `json:"event"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

