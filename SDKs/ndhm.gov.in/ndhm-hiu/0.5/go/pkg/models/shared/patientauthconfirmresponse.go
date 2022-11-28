package shared

import (
	"time"
)

// PatientAuthConfirmResponseAuth
// depending on the purpose of auth, as specified in /auth/init, the response may include the following
//  1. LINK - only returns **accessToken**
//  2. KYC - only returns **patient**
//  3. KYC_AND_LINK - returns both **accessToken** and **patient**
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
