package shared

import (
	"time"
)

type PatientAuthConfirmResponseAuth struct {
	AccessToken *string                     `json:"accessToken"`
	Patient     *PatientDemographicResponse `json:"patient"`
	Validity    *AccessTokenValidity        `json:"validity"`
}

type PatientAuthConfirmResponse struct {
	Auth      *PatientAuthConfirmResponseAuth `json:"auth"`
	Error     *Error                          `json:"error"`
	RequestID string                          `json:"requestId"`
	Resp      RequestReference                `json:"resp"`
	Timestamp time.Time                       `json:"timestamp"`
}
