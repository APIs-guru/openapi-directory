package shared

// AttestorPublicKey
// An attestor public key that will be used to verify attestations signed by this attestor.
type AttestorPublicKey struct {
	ASCIIArmoredPgpPublicKey *string        `json:"asciiArmoredPgpPublicKey,omitempty"`
	Comment                  *string        `json:"comment,omitempty"`
	ID                       *string        `json:"id,omitempty"`
	PkixPublicKey            *PkixPublicKey `json:"pkixPublicKey,omitempty"`
}
