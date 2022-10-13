package shared

type X509CertificateDetails struct {
	ExpiryTime         *string `json:"expiryTime"`
	Issuer             *string `json:"issuer"`
	PublicKeyType      *string `json:"publicKeyType"`
	SignatureAlgorithm *string `json:"signatureAlgorithm"`
	StartTime          *string `json:"startTime"`
	Subject            *string `json:"subject"`
}
