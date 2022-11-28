package shared

// GrafeasV1beta1IntotoDetails
// This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
type GrafeasV1beta1IntotoDetails struct {
	Signatures []GrafeasV1beta1IntotoSignature `json:"signatures,omitempty"`
	Signed     *Link                           `json:"signed,omitempty"`
}
