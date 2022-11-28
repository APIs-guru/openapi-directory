package shared

// X509CertificateDetails
// Details of an X.509 certificate. For informational purposes only.
type X509CertificateDetails struct {
	ExpiryTime         *string `json:"expiryTime,omitempty"`
	Issuer             *string `json:"issuer,omitempty"`
	PublicKeyType      *string `json:"publicKeyType,omitempty"`
	SignatureAlgorithm *string `json:"signatureAlgorithm,omitempty"`
	StartTime          *string `json:"startTime,omitempty"`
	Subject            *string `json:"subject,omitempty"`
}
