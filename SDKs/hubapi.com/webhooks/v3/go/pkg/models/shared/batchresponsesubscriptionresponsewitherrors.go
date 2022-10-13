package shared

import (
	"time"
)

type BatchResponseSubscriptionResponseWithErrorsStatusEnum string

const (
	BatchResponseSubscriptionResponseWithErrorsStatusEnumPending    BatchResponseSubscriptionResponseWithErrorsStatusEnum = "PENDING"
	BatchResponseSubscriptionResponseWithErrorsStatusEnumProcessing BatchResponseSubscriptionResponseWithErrorsStatusEnum = "PROCESSING"
	BatchResponseSubscriptionResponseWithErrorsStatusEnumCanceled   BatchResponseSubscriptionResponseWithErrorsStatusEnum = "CANCELED"
	BatchResponseSubscriptionResponseWithErrorsStatusEnumComplete   BatchResponseSubscriptionResponseWithErrorsStatusEnum = "COMPLETE"
)

type BatchResponseSubscriptionResponseWithErrors struct {
	CompletedAt time.Time                                             `json:"completedAt"`
	Errors      []StandardError                                       `json:"errors"`
	Links       map[string]string                                     `json:"links"`
	NumErrors   *int32                                                `json:"numErrors"`
	RequestedAt *time.Time                                            `json:"requestedAt"`
	Results     []SubscriptionResponse                                `json:"results"`
	StartedAt   time.Time                                             `json:"startedAt"`
	Status      BatchResponseSubscriptionResponseWithErrorsStatusEnum `json:"status"`
}
