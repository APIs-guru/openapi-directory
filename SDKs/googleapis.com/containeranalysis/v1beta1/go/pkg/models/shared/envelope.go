package shared

type Envelope struct {
	Payload     *string             `json:"payload"`
	PayloadType *string             `json:"payloadType"`
	Signatures  []EnvelopeSignature `json:"signatures"`
}
