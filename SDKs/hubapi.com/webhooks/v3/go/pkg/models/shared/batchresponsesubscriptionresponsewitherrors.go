package shared

import (
"time")


type BatchResponseSubscriptionResponseWithErrorsStatusEnum string

const (
    BatchResponseSubscriptionResponseWithErrorsStatusEnumPending BatchResponseSubscriptionResponseWithErrorsStatusEnum = "PENDING"
BatchResponseSubscriptionResponseWithErrorsStatusEnumProcessing BatchResponseSubscriptionResponseWithErrorsStatusEnum = "PROCESSING"
BatchResponseSubscriptionResponseWithErrorsStatusEnumCanceled BatchResponseSubscriptionResponseWithErrorsStatusEnum = "CANCELED"
BatchResponseSubscriptionResponseWithErrorsStatusEnumComplete BatchResponseSubscriptionResponseWithErrorsStatusEnum = "COMPLETE"
)


type BatchResponseSubscriptionResponseWithErrors struct {
    CompletedAt time.Time `json:"completedAt"`
    Errors []StandardError `json:"errors,omitempty"`
    Links map[string]string `json:"links,omitempty"`
    NumErrors *int32 `json:"numErrors,omitempty"`
    RequestedAt *time.Time `json:"requestedAt,omitempty"`
    Results []SubscriptionResponse `json:"results"`
    StartedAt time.Time `json:"startedAt"`
    Status BatchResponseSubscriptionResponseWithErrorsStatusEnum `json:"status"`
    
}

