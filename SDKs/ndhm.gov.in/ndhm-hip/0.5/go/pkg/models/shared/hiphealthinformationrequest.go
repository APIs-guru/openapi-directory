package shared

import (
	"time"
)

type HipHealthInformationRequestHiRequest struct {
	Consent     Consent     `json:"consent"`
	DataPushURL string      `json:"dataPushUrl"`
	DateRange   DateRange   `json:"dateRange"`
	KeyMaterial KeyMaterial `json:"keyMaterial"`
}

type HipHealthInformationRequest struct {
	HiRequest     HipHealthInformationRequestHiRequest `json:"hiRequest"`
	RequestID     string                               `json:"requestId"`
	Timestamp     time.Time                            `json:"timestamp"`
	TransactionID string                               `json:"transactionId"`
}
