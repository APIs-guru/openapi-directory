package shared

import (
"time")


type PatientLinkReferenceResultLinkAuthenticationTypeEnum string

const (
    PatientLinkReferenceResultLinkAuthenticationTypeEnumDirect PatientLinkReferenceResultLinkAuthenticationTypeEnum = "DIRECT"
PatientLinkReferenceResultLinkAuthenticationTypeEnumMediated PatientLinkReferenceResultLinkAuthenticationTypeEnum = "MEDIATED"
)


type PatientLinkReferenceResultLink struct {
    AuthenticationType PatientLinkReferenceResultLinkAuthenticationTypeEnum `json:"authenticationType"`
    Meta *Meta `json:"meta,omitempty"`
    ReferenceNumber string `json:"referenceNumber"`
    
}

type PatientLinkReferenceResult struct {
    Error *Error `json:"error,omitempty"`
    Link *PatientLinkReferenceResultLink `json:"link,omitempty"`
    RequestID string `json:"requestId"`
    Resp RequestReference `json:"resp"`
    Timestamp time.Time `json:"timestamp"`
    TransactionID string `json:"transactionId"`
    
}

