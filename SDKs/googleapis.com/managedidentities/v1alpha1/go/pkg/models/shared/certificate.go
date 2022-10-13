package shared

type Certificate struct {
	ExpireTime             *string      `json:"expireTime"`
	IssuingCertificate     *Certificate `json:"issuingCertificate"`
	Subject                *string      `json:"subject"`
	SubjectAlternativeName []string     `json:"subjectAlternativeName"`
	Thumbprint             *string      `json:"thumbprint"`
}
