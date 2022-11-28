package shared

// Envelope
// MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
type Envelope struct {
	Payload     *string             `json:"payload,omitempty"`
	PayloadType *string             `json:"payloadType,omitempty"`
	Signatures  []EnvelopeSignature `json:"signatures,omitempty"`
}
