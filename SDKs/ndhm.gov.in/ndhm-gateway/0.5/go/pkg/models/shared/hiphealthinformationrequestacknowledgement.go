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
	Error     *Error                                               `json:"error"`
	HiRequest *HipHealthInformationRequestAcknowledgementHiRequest `json:"hiRequest"`
	RequestID string                                               `json:"requestId"`
	Resp      RequestReference                                     `json:"resp"`
	Timestamp time.Time                                            `json:"timestamp"`
}
