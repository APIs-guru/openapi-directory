package shared

type SubjectConfig struct {
	CommonName     *string          `json:"commonName"`
	Subject        *Subject         `json:"subject"`
	SubjectAltName *SubjectAltNames `json:"subjectAltName"`
}
