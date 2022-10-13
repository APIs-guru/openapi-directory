package shared

import (
	"time"
)

type SubscriptionApprovalNotificationNotification struct {
	Status                SubscriptionStatusEnum `json:"status"`
	Subscription          *HiuSubscription       `json:"subscription"`
	SubscriptionRequestID *string                `json:"subscriptionRequestId"`
}

type SubscriptionApprovalNotification struct {
	Notification SubscriptionApprovalNotificationNotification `json:"notification"`
	RequestID    string                                       `json:"requestId"`
	Timestamp    time.Time                                    `json:"timestamp"`
}
