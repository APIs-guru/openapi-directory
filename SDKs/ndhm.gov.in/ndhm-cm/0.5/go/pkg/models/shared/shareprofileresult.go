package shared

import (
	"time"
)

type ShareProfileResult struct {
	Acknowledgement ShareProfileAcknowledgement `json:"acknowledgement"`
	Error           *Error                      `json:"error,omitempty"`
	RequestID       string                      `json:"requestId"`
	Resp            RequestReference            `json:"resp"`
	Timestamp       time.Time                   `json:"timestamp"`
}
