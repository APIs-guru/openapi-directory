package shared

type Attestation struct {
	GenericSignedAttestation *GenericSignedAttestation `json:"genericSignedAttestation"`
	PgpSignedAttestation     *PgpSignedAttestation     `json:"pgpSignedAttestation"`
}
