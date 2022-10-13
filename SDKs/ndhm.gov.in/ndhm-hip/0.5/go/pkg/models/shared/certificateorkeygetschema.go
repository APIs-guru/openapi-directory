package shared

type CertificateOrKeyGetSchema struct {
	Alg           *string  `json:"alg"`
	E             *string  `json:"e"`
	Kid           *string  `json:"kid"`
	Kty           *string  `json:"kty"`
	N             *string  `json:"n"`
	Use           *string  `json:"use"`
	X5c           []string `json:"x5c"`
	X5t           *string  `json:"x5t"`
	X5tNumberS256 *string  `json:"x5t#S256"`
}
