package shared



type Envelope struct {
    Payload *string `json:"payload,omitempty"`
    PayloadType *string `json:"payloadType,omitempty"`
    Signatures []EnvelopeSignature `json:"signatures,omitempty"`
    
}

