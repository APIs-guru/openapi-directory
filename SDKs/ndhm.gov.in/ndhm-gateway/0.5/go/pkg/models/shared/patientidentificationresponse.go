package shared

import (
	"time"
)

type PatientIdentificationResponsePatient struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type PatientIdentificationResponse struct {
	Error     *Error                                `json:"error"`
	Patient   *PatientIdentificationResponsePatient `json:"patient"`
	RequestID string                                `json:"requestId"`
	Resp      RequestReference                      `json:"resp"`
	Timestamp time.Time                             `json:"timestamp"`
}
