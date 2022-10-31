package shared

import (
"time")


type PatientDiscoveryRequestPatientGenderEnum string

const (
    PatientDiscoveryRequestPatientGenderEnumM PatientDiscoveryRequestPatientGenderEnum = "M"
PatientDiscoveryRequestPatientGenderEnumF PatientDiscoveryRequestPatientGenderEnum = "F"
PatientDiscoveryRequestPatientGenderEnumO PatientDiscoveryRequestPatientGenderEnum = "O"
PatientDiscoveryRequestPatientGenderEnumU PatientDiscoveryRequestPatientGenderEnum = "U"
)


type PatientDiscoveryRequestPatient struct {
    Gender PatientDiscoveryRequestPatientGenderEnum `json:"gender"`
    ID string `json:"id"`
    Name string `json:"name"`
    UnverifiedIdentifiers []Identifier `json:"unverifiedIdentifiers,omitempty"`
    VerifiedIdentifiers []Identifier `json:"verifiedIdentifiers"`
    YearOfBirth int64 `json:"yearOfBirth"`
    
}

type PatientDiscoveryRequest struct {
    Patient PatientDiscoveryRequestPatient `json:"patient"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    TransactionID string `json:"transactionId"`
    
}

