package shared



type KeyUsageOptions struct {
    CertSign *bool `json:"certSign,omitempty"`
    ContentCommitment *bool `json:"contentCommitment,omitempty"`
    CrlSign *bool `json:"crlSign,omitempty"`
    DataEncipherment *bool `json:"dataEncipherment,omitempty"`
    DecipherOnly *bool `json:"decipherOnly,omitempty"`
    DigitalSignature *bool `json:"digitalSignature,omitempty"`
    EncipherOnly *bool `json:"encipherOnly,omitempty"`
    KeyAgreement *bool `json:"keyAgreement,omitempty"`
    KeyEncipherment *bool `json:"keyEncipherment,omitempty"`
    
}

