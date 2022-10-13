package shared

import (
	"time"
)

type HiuConsentNotificationResponse struct {
	Acknowledgement []ConsentAcknowledgement `json:"acknowledgement"`
	Error           *Error                   `json:"error"`
	RequestID       string                   `json:"requestId"`
	Resp            RequestReference         `json:"resp"`
	Timestamp       time.Time                `json:"timestamp"`
}
