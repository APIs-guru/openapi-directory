package shared

import (
	"time"
)

type HiphiRequestHiRequest struct {
	Consent     Consent     `json:"consent"`
	DataPushURL string      `json:"dataPushUrl"`
	DateRange   DateRange   `json:"dateRange"`
	KeyMaterial KeyMaterial `json:"keyMaterial"`
}

type HiphiRequest struct {
	HiRequest     HiphiRequestHiRequest `json:"hiRequest"`
	RequestID     string                `json:"requestId"`
	Timestamp     time.Time             `json:"timestamp"`
	TransactionID string                `json:"transactionId"`
}
