package shared



type SubjectDescription struct {
    CommonName *string `json:"commonName,omitempty"`
    HexSerialNumber *string `json:"hexSerialNumber,omitempty"`
    Lifetime *string `json:"lifetime,omitempty"`
    NotAfterTime *string `json:"notAfterTime,omitempty"`
    NotBeforeTime *string `json:"notBeforeTime,omitempty"`
    Subject *Subject `json:"subject,omitempty"`
    SubjectAltName *SubjectAltNames `json:"subjectAltName,omitempty"`
    
}

