package shared

type SubjectDescription struct {
	CommonName      *string          `json:"commonName"`
	HexSerialNumber *string          `json:"hexSerialNumber"`
	Lifetime        *string          `json:"lifetime"`
	NotAfterTime    *string          `json:"notAfterTime"`
	NotBeforeTime   *string          `json:"notBeforeTime"`
	Subject         *Subject         `json:"subject"`
	SubjectAltName  *SubjectAltNames `json:"subjectAltName"`
}
