package shared

type Certificate struct {
	Issuer                     *string  `json:"issuer"`
	NotAfterTime               *string  `json:"notAfterTime"`
	NotBeforeTime              *string  `json:"notBeforeTime"`
	Parsed                     *bool    `json:"parsed"`
	RawDer                     *string  `json:"rawDer"`
	SerialNumber               *string  `json:"serialNumber"`
	Sha256Fingerprint          *string  `json:"sha256Fingerprint"`
	Subject                    *string  `json:"subject"`
	SubjectAlternativeDNSNames []string `json:"subjectAlternativeDnsNames"`
}
