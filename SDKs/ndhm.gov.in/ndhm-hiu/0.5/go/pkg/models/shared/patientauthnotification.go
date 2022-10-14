package shared

import (
	"time"
)

type PatientAuthNotificationAuthStatusEnum string

const (
	PatientAuthNotificationAuthStatusEnumGranted PatientAuthNotificationAuthStatusEnum = "GRANTED"
	PatientAuthNotificationAuthStatusEnumDenied  PatientAuthNotificationAuthStatusEnum = "DENIED"
)

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
