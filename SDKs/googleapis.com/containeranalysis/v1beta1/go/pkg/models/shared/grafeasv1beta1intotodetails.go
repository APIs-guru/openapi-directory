package shared

type GrafeasV1beta1IntotoDetails struct {
	Signatures []GrafeasV1beta1IntotoSignature `json:"signatures,omitempty"`
	Signed     *Link                           `json:"signed,omitempty"`
}
