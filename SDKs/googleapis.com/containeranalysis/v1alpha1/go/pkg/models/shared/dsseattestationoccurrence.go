package shared

// DsseAttestationOccurrence
// An occurrence describing an attestation on a resource
type DsseAttestationOccurrence struct {
	Envelope  *Envelope        `json:"envelope,omitempty"`
	Statement *InTotoStatement `json:"statement,omitempty"`
}
