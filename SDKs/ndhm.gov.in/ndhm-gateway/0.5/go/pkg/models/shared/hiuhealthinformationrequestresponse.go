package shared

import (
	"time"
)

type HiuHealthInformationRequestResponseHiRequestSessionStatusEnum string

const (
	HiuHealthInformationRequestResponseHiRequestSessionStatusEnumRequested    HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = "REQUESTED"
	HiuHealthInformationRequestResponseHiRequestSessionStatusEnumAcknowledged HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = "ACKNOWLEDGED"
)

type HiuHealthInformationRequestResponseHiRequest struct {
	SessionStatus HiuHealthInformationRequestResponseHiRequestSessionStatusEnum `json:"sessionStatus"`
	TransactionID string                                                        `json:"transactionId"`
}

type HiuHealthInformationRequestResponse struct {
	Error     *Error                                        `json:"error"`
	HiRequest *HiuHealthInformationRequestResponseHiRequest `json:"hiRequest"`
	RequestID string                                        `json:"requestId"`
	Resp      RequestReference                              `json:"resp"`
	Timestamp time.Time                                     `json:"timestamp"`
}
