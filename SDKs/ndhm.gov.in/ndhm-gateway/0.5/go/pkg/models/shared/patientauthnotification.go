package shared

import (
	"time"
)

type PatientAuthNotificationAuthStatusEnum string

const (
	PatientAuthNotificationAuthStatusEnumGranted PatientAuthNotificationAuthStatusEnum = "GRANTED"
	PatientAuthNotificationAuthStatusEnumDenied  PatientAuthNotificationAuthStatusEnum = "DENIED"
)

// PatientAuthNotificationAuth
// depending on the purpose of auth, as specified in /auth/init, the response may include the following
//  1. LINK - only returns **accessToken**
//  2. KYC - only returns **patient**
//  3. KYC_AND_LINK - returns both **accessToken** and **patient**
type PatientAuthNotificationAuth struct {
	AccessToken   *string                               `json:"accessToken,omitempty"`
	Patient       *PatientDemographicResponse           `json:"patient,omitempty"`
	Status        PatientAuthNotificationAuthStatusEnum `json:"status"`
	TransactionID string                                `json:"transactionId"`
	Validity      *AccessTokenValidity                  `json:"validity,omitempty"`
}

type PatientAuthNotification struct {
	Auth      *PatientAuthNotificationAuth `json:"auth,omitempty"`
	RequestID string                       `json:"requestId"`
	Timestamp time.Time                    `json:"timestamp"`
}
