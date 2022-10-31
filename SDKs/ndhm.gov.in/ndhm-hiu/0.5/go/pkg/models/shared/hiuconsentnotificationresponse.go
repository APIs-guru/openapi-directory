package shared

import (
	"time"
)

type HiuConsentNotificationResponse struct {
	Acknowledgement []ConsentAcknowledgement `json:"acknowledgement,omitempty"`
	Error           *Error                   `json:"error,omitempty"`
	RequestID       string                   `json:"requestId"`
	Resp            RequestReference         `json:"resp"`
	Timestamp       time.Time                `json:"timestamp"`
}
