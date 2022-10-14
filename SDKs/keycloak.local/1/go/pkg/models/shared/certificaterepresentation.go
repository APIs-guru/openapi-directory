package shared

type CertificateRepresentation struct {
	Certificate *string `json:"certificate,omitempty"`
	Kid         *string `json:"kid,omitempty"`
	PrivateKey  *string `json:"privateKey,omitempty"`
	PublicKey   *string `json:"publicKey,omitempty"`
}
