package shared

import (
	"time"
)

type PatientSmsNotifcationResponseStatusEnum string

const (
	PatientSmsNotifcationResponseStatusEnumAcknowledged PatientSmsNotifcationResponseStatusEnum = "ACKNOWLEDGED"
	PatientSmsNotifcationResponseStatusEnumErrored      PatientSmsNotifcationResponseStatusEnum = "ERRORED"
)

type PatientSmsNotifcationResponse struct {
	Error     *Error                                   `json:"error"`
	RequestID string                                   `json:"requestId"`
	Resp      RequestReference                         `json:"resp"`
	Status    *PatientSmsNotifcationResponseStatusEnum `json:"status"`
	Timestamp time.Time                                `json:"timestamp"`
}
