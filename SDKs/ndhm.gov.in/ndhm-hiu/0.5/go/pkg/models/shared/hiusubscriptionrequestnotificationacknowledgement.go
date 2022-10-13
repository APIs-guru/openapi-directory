package shared

import (
	"time"
)

type HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum string

const (
	HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnumOk HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum = "OK"
)

type HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement struct {
	Status                HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum `json:"status"`
	SubscriptionRequestID string                                                                     `json:"subscriptionRequestId"`
}

type HiuSubscriptionRequestNotificationAcknowledgement struct {
	Acknowledgement *HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement `json:"acknowledgement"`
	Error           *Error                                                            `json:"error"`
	RequestID       string                                                            `json:"requestId"`
	Resp            RequestReference                                                  `json:"resp"`
	Timestamp       time.Time                                                         `json:"timestamp"`
}
