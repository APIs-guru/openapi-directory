package shared

type DsseAttestationOccurrence struct {
	Envelope  *Envelope        `json:"envelope"`
	Statement *InTotoStatement `json:"statement"`
}
