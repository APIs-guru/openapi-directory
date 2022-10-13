package shared

import (
	"time"
)

type HiuSubscriptionRequestReceiptSubscriptionRequest struct {
	ID string `json:"id"`
}

type HiuSubscriptionRequestReceipt struct {
	Error               *Error                                            `json:"error"`
	RequestID           string                                            `json:"requestId"`
	Resp                RequestReference                                  `json:"resp"`
	SubscriptionRequest *HiuSubscriptionRequestReceiptSubscriptionRequest `json:"subscriptionRequest"`
	Timestamp           time.Time                                         `json:"timestamp"`
}
