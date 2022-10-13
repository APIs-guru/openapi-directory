package shared

import (
	"time"
)

type PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum string

const (
	PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum = "OK"
)

type PatientAuthNotificationAcknowledgementAcknowledgement struct {
	Status PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum `json:"status"`
}

type PatientAuthNotificationAcknowledgement struct {
	Acknowledgement *PatientAuthNotificationAcknowledgementAcknowledgement `json:"acknowledgement"`
	Error           *Error                                                 `json:"error"`
	RequestID       string                                                 `json:"requestId"`
	Resp            RequestReference                                       `json:"resp"`
	Timestamp       time.Time                                              `json:"timestamp"`
}
