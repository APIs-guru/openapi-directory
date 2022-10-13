package shared

type ConsentAcknowledgementStatusEnum string

const (
	ConsentAcknowledgementStatusEnumOk      ConsentAcknowledgementStatusEnum = "OK"
	ConsentAcknowledgementStatusEnumUnknown ConsentAcknowledgementStatusEnum = "UNKNOWN"
)

type ConsentAcknowledgement struct {
	ConsentID string                           `json:"consentId"`
	Status    ConsentAcknowledgementStatusEnum `json:"status"`
}
