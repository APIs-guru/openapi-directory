package shared



type Certificate struct {
    Issuer *string `json:"issuer,omitempty"`
    NotAfterTime *string `json:"notAfterTime,omitempty"`
    NotBeforeTime *string `json:"notBeforeTime,omitempty"`
    Parsed *bool `json:"parsed,omitempty"`
    RawDer *string `json:"rawDer,omitempty"`
    SerialNumber *string `json:"serialNumber,omitempty"`
    Sha256Fingerprint *string `json:"sha256Fingerprint,omitempty"`
    Subject *string `json:"subject,omitempty"`
    SubjectAlternativeDNSNames []string `json:"subjectAlternativeDnsNames,omitempty"`
    
}

