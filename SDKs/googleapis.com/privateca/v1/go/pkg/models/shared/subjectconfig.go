package shared

type SubjectConfig struct {
	Subject        *Subject         `json:"subject"`
	SubjectAltName *SubjectAltNames `json:"subjectAltName"`
}
