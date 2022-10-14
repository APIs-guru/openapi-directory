package shared

type SubjectConfig struct {
	CommonName     *string          `json:"commonName,omitempty"`
	Subject        *Subject         `json:"subject,omitempty"`
	SubjectAltName *SubjectAltNames `json:"subjectAltName,omitempty"`
}
