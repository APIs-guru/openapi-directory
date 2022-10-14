package shared

import (
	"time"
)

type PatientCareContextLinkResponseAcknowledgementStatusEnum string

const (
	PatientCareContextLinkResponseAcknowledgementStatusEnumSuccess PatientCareContextLinkResponseAcknowledgementStatusEnum = "SUCCESS"
)

type PatientCareContextLinkResponseAcknowledgement struct {
	Status PatientCareContextLinkResponseAcknowledgementStatusEnum `json:"status"`
}

type PatientCareContextLinkResponse struct {
	Acknowledgement *PatientCareContextLinkResponseAcknowledgement `json:"acknowledgement,omitempty"`
	Error           *Error                                         `json:"error,omitempty"`
	RequestID       string                                         `json:"requestId"`
	Resp            RequestReference                               `json:"resp"`
	Timestamp       time.Time                                      `json:"timestamp"`
}
