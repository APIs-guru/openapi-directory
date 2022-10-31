package shared



type DsseAttestationOccurrence struct {
    Envelope *Envelope `json:"envelope,omitempty"`
    Statement *InTotoStatement `json:"statement,omitempty"`
    
}

