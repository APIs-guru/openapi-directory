package shared

import (
"time")

type ConsentArtefactResponseConsentConsentDetailCareContexts struct {
    CareContextReference string `json:"careContextReference"`
    PatientReference string `json:"patientReference"`
    
}

type ConsentArtefactResponseConsentConsentDetailConsentManager struct {
    ID string `json:"id"`
    
}

type ConsentArtefactResponseConsentConsentDetailHip struct {
    ID string `json:"id"`
    
}

type ConsentArtefactResponseConsentConsentDetailHiu struct {
    ID string `json:"id"`
    
}

type ConsentArtefactResponseConsentConsentDetail struct {
    CareContexts []ConsentArtefactResponseConsentConsentDetailCareContexts `json:"careContexts"`
    ConsentID string `json:"consentId"`
    ConsentManager ConsentArtefactResponseConsentConsentDetailConsentManager `json:"consentManager"`
    CreatedAt time.Time `json:"createdAt"`
    HiTypes []HiTypeEnumEnum `json:"hiTypes"`
    Hip ConsentArtefactResponseConsentConsentDetailHip `json:"hip"`
    Hiu ConsentArtefactResponseConsentConsentDetailHiu `json:"hiu"`
    Patient ConsentManagerPatientID `json:"patient"`
    Permission Permission `json:"permission"`
    Purpose UsePurpose `json:"purpose"`
    Requester *Requester `json:"requester,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    
}

type ConsentArtefactResponseConsent struct {
    ConsentDetail ConsentArtefactResponseConsentConsentDetail `json:"consentDetail"`
    Signature string `json:"signature"`
    Status ConsentStatusEnum `json:"status"`
    
}

type ConsentArtefactResponse struct {
    Consent *ConsentArtefactResponseConsent `json:"consent,omitempty"`
    Error *Error `json:"error,omitempty"`
    RequestID string `json:"requestId"`
    Resp RequestReference `json:"resp"`
    Timestamp time.Time `json:"timestamp"`
    
}

