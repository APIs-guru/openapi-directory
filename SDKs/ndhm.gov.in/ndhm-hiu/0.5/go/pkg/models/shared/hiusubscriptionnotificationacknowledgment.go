package shared

import (
	"time"
)

type HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum string

const (
	HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnumOk HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum = "OK"
)

type HiuSubscriptionNotificationAcknowledgmentAcknowledgement struct {
	EventID string                                                             `json:"eventId"`
	Status  HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum `json:"status"`
}

type HiuSubscriptionNotificationAcknowledgment struct {
	Acknowledgement *HiuSubscriptionNotificationAcknowledgmentAcknowledgement `json:"acknowledgement"`
	Error           *Error                                                    `json:"error"`
	RequestID       string                                                    `json:"requestId"`
	Resp            RequestReference                                          `json:"resp"`
	Timestamp       time.Time                                                 `json:"timestamp"`
}
