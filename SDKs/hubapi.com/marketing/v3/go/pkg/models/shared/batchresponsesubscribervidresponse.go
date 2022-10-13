package shared

import (
	"time"
)

type BatchResponseSubscriberVidResponseStatusEnum string

const (
	BatchResponseSubscriberVidResponseStatusEnumPending    BatchResponseSubscriberVidResponseStatusEnum = "PENDING"
	BatchResponseSubscriberVidResponseStatusEnumProcessing BatchResponseSubscriberVidResponseStatusEnum = "PROCESSING"
	BatchResponseSubscriberVidResponseStatusEnumCanceled   BatchResponseSubscriberVidResponseStatusEnum = "CANCELED"
	BatchResponseSubscriberVidResponseStatusEnumComplete   BatchResponseSubscriberVidResponseStatusEnum = "COMPLETE"
)

type BatchResponseSubscriberVidResponse struct {
	CompletedAt time.Time                                    `json:"completedAt"`
	Errors      []StandardError                              `json:"errors"`
	Links       map[string]string                            `json:"links"`
	NumErrors   *int32                                       `json:"numErrors"`
	RequestedAt *time.Time                                   `json:"requestedAt"`
	Results     []SubscriberVidResponse                      `json:"results"`
	StartedAt   time.Time                                    `json:"startedAt"`
	Status      BatchResponseSubscriberVidResponseStatusEnum `json:"status"`
}
