package shared

import (
	"time"
)

type PatientAuthInitResponseAuth struct {
	Meta          *AuthMeta              `json:"meta,omitempty"`
	Mode          AuthenticationModeEnum `json:"mode"`
	TransactionID string                 `json:"transactionId"`
}

type PatientAuthInitResponse struct {
	Auth      *PatientAuthInitResponseAuth `json:"auth,omitempty"`
	Error     *Error                       `json:"error,omitempty"`
	RequestID string                       `json:"requestId"`
	Resp      RequestReference             `json:"resp"`
	Timestamp time.Time                    `json:"timestamp"`
}
