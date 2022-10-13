package shared

type KeyUsageOptions struct {
	CertSign          *bool `json:"certSign"`
	ContentCommitment *bool `json:"contentCommitment"`
	CrlSign           *bool `json:"crlSign"`
	DataEncipherment  *bool `json:"dataEncipherment"`
	DecipherOnly      *bool `json:"decipherOnly"`
	DigitalSignature  *bool `json:"digitalSignature"`
	EncipherOnly      *bool `json:"encipherOnly"`
	KeyAgreement      *bool `json:"keyAgreement"`
	KeyEncipherment   *bool `json:"keyEncipherment"`
}
