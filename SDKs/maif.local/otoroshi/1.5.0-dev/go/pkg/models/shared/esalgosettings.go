package shared

// EsAlgoSettings
// Settings for an EC + SHA signing algorithm
type EsAlgoSettings struct {
	PrivateKey *string `json:"privateKey,omitempty"`
	PublicKey  string  `json:"publicKey"`
	Size       int32   `json:"size"`
	Type       string  `json:"type"`
}
