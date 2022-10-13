package shared

import (
	"time"
)

type LinkConfirmationRequestConfirmation struct {
	LinkRefNumber string `json:"linkRefNumber"`
	Token         string `json:"token"`
}

type LinkConfirmationRequest struct {
	Confirmation LinkConfirmationRequestConfirmation `json:"confirmation"`
	RequestID    string                              `json:"requestId"`
	Timestamp    time.Time                           `json:"timestamp"`
}
