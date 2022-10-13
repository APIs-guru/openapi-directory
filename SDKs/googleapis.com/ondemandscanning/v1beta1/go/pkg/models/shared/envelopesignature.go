package shared

type EnvelopeSignature struct {
	Keyid *string `json:"keyid"`
	Sig   *string `json:"sig"`
}
