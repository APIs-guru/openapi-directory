package shared

import (
	"time"
)

type PatientSmsNotifcationRequestNotificationHip struct {
	ID   string  `json:"id"`
	Name *string `json:"name"`
}

type PatientSmsNotifcationRequestNotification struct {
	CareContextInfo string                                      `json:"careContextInfo"`
	DeeplinkURL     *string                                     `json:"deeplinkUrl"`
	Hip             PatientSmsNotifcationRequestNotificationHip `json:"hip"`
	PhoneNo         string                                      `json:"phoneNo"`
	ReceiverName    *string                                     `json:"receiverName"`
}

type PatientSmsNotifcationRequest struct {
	Notification PatientSmsNotifcationRequestNotification `json:"notification"`
	RequestID    string                                   `json:"requestId"`
	Timestamp    time.Time                                `json:"timestamp"`
}
