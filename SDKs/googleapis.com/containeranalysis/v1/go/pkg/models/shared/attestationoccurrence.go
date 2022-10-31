package shared



type AttestationOccurrence struct {
    Jwts []Jwt `json:"jwts,omitempty"`
    SerializedPayload *string `json:"serializedPayload,omitempty"`
    Signatures []Signature `json:"signatures,omitempty"`
    
}

