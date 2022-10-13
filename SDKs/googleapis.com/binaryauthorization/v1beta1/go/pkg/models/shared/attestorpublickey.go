package shared

type AttestorPublicKey struct {
	ASCIIArmoredPgpPublicKey *string        `json:"asciiArmoredPgpPublicKey"`
	Comment                  *string        `json:"comment"`
	ID                       *string        `json:"id"`
	PkixPublicKey            *PkixPublicKey `json:"pkixPublicKey"`
}
