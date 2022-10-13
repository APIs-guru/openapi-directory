package shared

import (
	"time"
)

type PatientLinkResultPatient struct {
	CareContexts    []CareContextRepresentation `json:"careContexts"`
	Display         string                      `json:"display"`
	ReferenceNumber string                      `json:"referenceNumber"`
}

type PatientLinkResult struct {
	Error     *Error                    `json:"error"`
	Patient   *PatientLinkResultPatient `json:"patient"`
	RequestID string                    `json:"requestId"`
	Resp      RequestReference          `json:"resp"`
	Timestamp time.Time                 `json:"timestamp"`
}
