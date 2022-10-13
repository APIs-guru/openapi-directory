package shared

import (
	"time"
)

type HealthInformationNotificationNotificationNotifierTypeEnum string

const (
	HealthInformationNotificationNotificationNotifierTypeEnumHiu HealthInformationNotificationNotificationNotifierTypeEnum = "HIU"
	HealthInformationNotificationNotificationNotifierTypeEnumHip HealthInformationNotificationNotificationNotifierTypeEnum = "HIP"
)

type HealthInformationNotificationNotificationNotifier struct {
	ID   *string                                                    `json:"id"`
	Type *HealthInformationNotificationNotificationNotifierTypeEnum `json:"type"`
}

type HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum string

const (
	HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumTransferred HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = "TRANSFERRED"
	HealthInformationNotificationNotificationStatusNotificationSessionStatusEnumFailed      HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = "FAILED"
)

type HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum string

const (
	HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumDelivered HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = "DELIVERED"
	HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumOk        HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = "OK"
	HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnumErrored   HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = "ERRORED"
)

type HealthInformationNotificationNotificationStatusNotificationStatusResponses struct {
	CareContextReference string                                                                                 `json:"careContextReference"`
	Description          *string                                                                                `json:"description"`
	HiStatus             HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum `json:"hiStatus"`
}

type HealthInformationNotificationNotificationStatusNotification struct {
	HipID           string                                                                       `json:"hipId"`
	SessionStatus   HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum `json:"sessionStatus"`
	StatusResponses []HealthInformationNotificationNotificationStatusNotificationStatusResponses `json:"statusResponses"`
}

type HealthInformationNotificationNotification struct {
	ConsentID          string                                                      `json:"consentId"`
	DoneAt             time.Time                                                   `json:"doneAt"`
	Notifier           HealthInformationNotificationNotificationNotifier           `json:"notifier"`
	StatusNotification HealthInformationNotificationNotificationStatusNotification `json:"statusNotification"`
	TransactionID      string                                                      `json:"transactionId"`
}

type HealthInformationNotification struct {
	Notification HealthInformationNotificationNotification `json:"notification"`
	RequestID    string                                    `json:"requestId"`
	Timestamp    time.Time                                 `json:"timestamp"`
}
