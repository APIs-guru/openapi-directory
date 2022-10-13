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
	AccessToken   *string                               `json:"accessToken"`
	Patient       *PatientDemographicResponse           `json:"patient"`
	Status        PatientAuthNotificationAuthStatusEnum `json:"status"`
	TransactionID string                                `json:"transactionId"`
	Validity      *AccessTokenValidity                  `json:"validity"`
}

type PatientAuthNotification struct {
	Auth      *PatientAuthNotificationAuth `json:"auth"`
	RequestID string                       `json:"requestId"`
	Timestamp time.Time                    `json:"timestamp"`
}
