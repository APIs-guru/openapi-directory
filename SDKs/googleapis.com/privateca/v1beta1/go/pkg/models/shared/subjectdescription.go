package shared

// SubjectDescription
// These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
type SubjectDescription struct {
	CommonName      *string          `json:"commonName,omitempty"`
	HexSerialNumber *string          `json:"hexSerialNumber,omitempty"`
	Lifetime        *string          `json:"lifetime,omitempty"`
	NotAfterTime    *string          `json:"notAfterTime,omitempty"`
	NotBeforeTime   *string          `json:"notBeforeTime,omitempty"`
	Subject         *Subject         `json:"subject,omitempty"`
	SubjectAltName  *SubjectAltNames `json:"subjectAltName,omitempty"`
}
