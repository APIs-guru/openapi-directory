package shared

import (
	"time"
)

type PatientAuthConfirmResponseAuth struct {
	AccessToken *string                     `json:"accessToken,omitempty"`
	Patient     *PatientDemographicResponse `json:"patient,omitempty"`
	Validity    *AccessTokenValidity        `json:"validity,omitempty"`
}

type PatientAuthConfirmResponse struct {
	Auth      *PatientAuthConfirmResponseAuth `json:"auth,omitempty"`
	Error     *Error                          `json:"error,omitempty"`
	RequestID string                          `json:"requestId"`
	Resp      RequestReference                `json:"resp"`
	Timestamp time.Time                       `json:"timestamp"`
}
