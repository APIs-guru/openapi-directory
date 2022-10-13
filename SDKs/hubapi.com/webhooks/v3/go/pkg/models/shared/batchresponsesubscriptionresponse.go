package shared

import (
	"time"
)

type BatchResponseSubscriptionResponseStatusEnum string

const (
	BatchResponseSubscriptionResponseStatusEnumPending    BatchResponseSubscriptionResponseStatusEnum = "PENDING"
	BatchResponseSubscriptionResponseStatusEnumProcessing BatchResponseSubscriptionResponseStatusEnum = "PROCESSING"
	BatchResponseSubscriptionResponseStatusEnumCanceled   BatchResponseSubscriptionResponseStatusEnum = "CANCELED"
	BatchResponseSubscriptionResponseStatusEnumComplete   BatchResponseSubscriptionResponseStatusEnum = "COMPLETE"
)

type BatchResponseSubscriptionResponse struct {
	CompletedAt time.Time                                   `json:"completedAt"`
	Links       map[string]string                           `json:"links"`
	RequestedAt *time.Time                                  `json:"requestedAt"`
	Results     []SubscriptionResponse                      `json:"results"`
	StartedAt   time.Time                                   `json:"startedAt"`
	Status      BatchResponseSubscriptionResponseStatusEnum `json:"status"`
}
