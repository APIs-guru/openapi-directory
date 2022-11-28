package shared

// EnvelopeSignature
// A DSSE signature
type EnvelopeSignature struct {
	Keyid *string `json:"keyid,omitempty"`
	Sig   *string `json:"sig,omitempty"`
}
