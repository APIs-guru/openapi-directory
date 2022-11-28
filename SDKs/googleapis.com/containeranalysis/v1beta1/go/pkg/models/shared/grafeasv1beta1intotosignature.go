package shared

// GrafeasV1beta1IntotoSignature
// A signature object consists of the KeyID used and the signature itself.
type GrafeasV1beta1IntotoSignature struct {
	Keyid *string `json:"keyid,omitempty"`
	Sig   *string `json:"sig,omitempty"`
}
