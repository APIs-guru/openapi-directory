package shared

import (
	"time"
)

type PatientLinkReferenceResultLinkAuthenticationTypeEnum string

const (
	PatientLinkReferenceResultLinkAuthenticationTypeEnumDirect   PatientLinkReferenceResultLinkAuthenticationTypeEnum = "DIRECT"
	PatientLinkReferenceResultLinkAuthenticationTypeEnumMediated PatientLinkReferenceResultLinkAuthenticationTypeEnum = "MEDIATED"
)

type PatientLinkReferenceResultLink struct {
	AuthenticationType PatientLinkReferenceResultLinkAuthenticationTypeEnum `json:"authenticationType"`
	Meta               *Meta                                                `json:"meta"`
	ReferenceNumber    string                                               `json:"referenceNumber"`
}

type PatientLinkReferenceResult struct {
	Error         *Error                          `json:"error"`
	Link          *PatientLinkReferenceResultLink `json:"link"`
	RequestID     string                          `json:"requestId"`
	Resp          RequestReference                `json:"resp"`
	Timestamp     time.Time                       `json:"timestamp"`
	TransactionID string                          `json:"transactionId"`
}
