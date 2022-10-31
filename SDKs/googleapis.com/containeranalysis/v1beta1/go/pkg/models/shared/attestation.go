package shared



type Attestation struct {
    GenericSignedAttestation *GenericSignedAttestation `json:"genericSignedAttestation,omitempty"`
    PgpSignedAttestation *PgpSignedAttestation `json:"pgpSignedAttestation,omitempty"`
    
}

