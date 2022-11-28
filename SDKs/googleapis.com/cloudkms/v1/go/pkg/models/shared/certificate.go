package shared

// CertificateInput
// A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
type CertificateInput struct {
	RawDer *string `json:"rawDer,omitempty"`
}

// Certificate
// A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
type Certificate struct {
	Issuer                     *string  `json:"issuer,omitempty"`
	NotAfterTime               *string  `json:"notAfterTime,omitempty"`
	NotBeforeTime              *string  `json:"notBeforeTime,omitempty"`
	Parsed                     *bool    `json:"parsed,omitempty"`
	RawDer                     *string  `json:"rawDer,omitempty"`
	SerialNumber               *string  `json:"serialNumber,omitempty"`
	Sha256Fingerprint          *string  `json:"sha256Fingerprint,omitempty"`
	Subject                    *string  `json:"subject,omitempty"`
	SubjectAlternativeDNSNames []string `json:"subjectAlternativeDnsNames,omitempty"`
}
