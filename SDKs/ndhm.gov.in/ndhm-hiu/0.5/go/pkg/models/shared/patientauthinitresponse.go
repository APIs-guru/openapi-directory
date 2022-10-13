package shared

import (
	"time"
)

type PatientAuthInitResponseAuth struct {
	Meta          *AuthMeta              `json:"meta"`
	Mode          AuthenticationModeEnum `json:"mode"`
	TransactionID string                 `json:"transactionId"`
}

type PatientAuthInitResponse struct {
	Auth      *PatientAuthInitResponseAuth `json:"auth"`
	Error     *Error                       `json:"error"`
	RequestID string                       `json:"requestId"`
	Resp      RequestReference             `json:"resp"`
	Timestamp time.Time                    `json:"timestamp"`
}
