package shared

// Certificate
// Certificate used to configure LDAPS.
type Certificate struct {
	ExpireTime             *string      `json:"expireTime,omitempty"`
	IssuingCertificate     *Certificate `json:"issuingCertificate,omitempty"`
	Subject                *string      `json:"subject,omitempty"`
	SubjectAlternativeName []string     `json:"subjectAlternativeName,omitempty"`
	Thumbprint             *string      `json:"thumbprint,omitempty"`
}
