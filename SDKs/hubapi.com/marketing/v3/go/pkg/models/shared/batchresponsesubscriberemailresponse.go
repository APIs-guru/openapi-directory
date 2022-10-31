package shared

import (
	"time"
)

type BatchResponseSubscriberEmailResponseStatusEnum string

const (
	BatchResponseSubscriberEmailResponseStatusEnumPending    BatchResponseSubscriberEmailResponseStatusEnum = "PENDING"
	BatchResponseSubscriberEmailResponseStatusEnumProcessing BatchResponseSubscriberEmailResponseStatusEnum = "PROCESSING"
	BatchResponseSubscriberEmailResponseStatusEnumCanceled   BatchResponseSubscriberEmailResponseStatusEnum = "CANCELED"
	BatchResponseSubscriberEmailResponseStatusEnumComplete   BatchResponseSubscriberEmailResponseStatusEnum = "COMPLETE"
)

type BatchResponseSubscriberEmailResponse struct {
	CompletedAt time.Time                                      `json:"completedAt"`
	Errors      []StandardError                                `json:"errors,omitempty"`
	Links       map[string]string                              `json:"links,omitempty"`
	NumErrors   *int32                                         `json:"numErrors,omitempty"`
	RequestedAt *time.Time                                     `json:"requestedAt,omitempty"`
	Results     []SubscriberEmailResponse                      `json:"results"`
	StartedAt   time.Time                                      `json:"startedAt"`
	Status      BatchResponseSubscriberEmailResponseStatusEnum `json:"status"`
}
