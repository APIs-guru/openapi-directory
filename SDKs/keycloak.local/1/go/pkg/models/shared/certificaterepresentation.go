package shared

type CertificateRepresentation struct {
	Certificate *string `json:"certificate"`
	Kid         *string `json:"kid"`
	PrivateKey  *string `json:"privateKey"`
	PublicKey   *string `json:"publicKey"`
}
