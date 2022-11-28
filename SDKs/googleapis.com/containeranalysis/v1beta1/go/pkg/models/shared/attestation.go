package shared

// Attestation
// Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
type Attestation struct {
	GenericSignedAttestation *GenericSignedAttestation `json:"genericSignedAttestation,omitempty"`
	PgpSignedAttestation     *PgpSignedAttestation     `json:"pgpSignedAttestation,omitempty"`
}
