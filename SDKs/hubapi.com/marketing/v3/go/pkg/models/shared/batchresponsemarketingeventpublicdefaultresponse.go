package shared

import (
	"time"
)

type BatchResponseMarketingEventPublicDefaultResponseStatusEnum string

const (
	BatchResponseMarketingEventPublicDefaultResponseStatusEnumPending    BatchResponseMarketingEventPublicDefaultResponseStatusEnum = "PENDING"
	BatchResponseMarketingEventPublicDefaultResponseStatusEnumProcessing BatchResponseMarketingEventPublicDefaultResponseStatusEnum = "PROCESSING"
	BatchResponseMarketingEventPublicDefaultResponseStatusEnumCanceled   BatchResponseMarketingEventPublicDefaultResponseStatusEnum = "CANCELED"
	BatchResponseMarketingEventPublicDefaultResponseStatusEnumComplete   BatchResponseMarketingEventPublicDefaultResponseStatusEnum = "COMPLETE"
)

type BatchResponseMarketingEventPublicDefaultResponse struct {
	CompletedAt time.Time                                                  `json:"completedAt"`
	Errors      []StandardError                                            `json:"errors,omitempty"`
	Links       map[string]string                                          `json:"links,omitempty"`
	NumErrors   *int32                                                     `json:"numErrors,omitempty"`
	RequestedAt *time.Time                                                 `json:"requestedAt,omitempty"`
	Results     []MarketingEventPublicDefaultResponse                      `json:"results"`
	StartedAt   time.Time                                                  `json:"startedAt"`
	Status      BatchResponseMarketingEventPublicDefaultResponseStatusEnum `json:"status"`
}
