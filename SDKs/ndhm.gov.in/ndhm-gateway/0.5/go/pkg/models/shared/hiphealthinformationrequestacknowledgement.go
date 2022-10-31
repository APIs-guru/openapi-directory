package shared

import (
	"time"
)

type HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum string

const (
	HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnumAcknowledged HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum = "ACKNOWLEDGED"
)

type HipHealthInformationRequestAcknowledgementHiRequest struct {
	SessionStatus HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum `json:"sessionStatus"`
	TransactionID string                                                               `json:"transactionId"`
}

type HipHealthInformationRequestAcknowledgement struct {
	Error     *Error                                               `json:"error,omitempty"`
	HiRequest *HipHealthInformationRequestAcknowledgementHiRequest `json:"hiRequest,omitempty"`
	RequestID string                                               `json:"requestId"`
	Resp      RequestReference                                     `json:"resp"`
	Timestamp time.Time                                            `json:"timestamp"`
}
