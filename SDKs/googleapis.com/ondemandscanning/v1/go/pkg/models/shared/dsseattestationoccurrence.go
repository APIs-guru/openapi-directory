package shared

// DsseAttestationOccurrence
// Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
type DsseAttestationOccurrence struct {
	Envelope  *Envelope        `json:"envelope,omitempty"`
	Statement *InTotoStatement `json:"statement,omitempty"`
}
