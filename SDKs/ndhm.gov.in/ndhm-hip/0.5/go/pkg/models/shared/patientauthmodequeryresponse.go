package shared

import (
	"time"
)

type PatientAuthModeQueryResponseAuth struct {
	Modes   []AuthenticationModeEnum `json:"modes"`
	Purpose PatientAuthPurposeEnum   `json:"purpose"`
}

type PatientAuthModeQueryResponse struct {
	Auth      *PatientAuthModeQueryResponseAuth `json:"auth"`
	Error     *Error                            `json:"error"`
	RequestID string                            `json:"requestId"`
	Resp      RequestReference                  `json:"resp"`
	Timestamp time.Time                         `json:"timestamp"`
}
