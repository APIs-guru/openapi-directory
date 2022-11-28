package shared

// SubjectConfig
// These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
type SubjectConfig struct {
	Subject        *Subject         `json:"subject,omitempty"`
	SubjectAltName *SubjectAltNames `json:"subjectAltName,omitempty"`
}
