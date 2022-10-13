package shared

import (
	"time"
)

type ConsentRequestStatusRequest struct {
	ConsentRequestID string    `json:"consentRequestId"`
	RequestID        string    `json:"requestId"`
	Timestamp        time.Time `json:"timestamp"`
}
