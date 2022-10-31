package shared



type InTotoStatement struct {
    Type *string `json:"_type,omitempty"`
    PredicateType *string `json:"predicateType,omitempty"`
    Provenance *InTotoProvenance `json:"provenance,omitempty"`
    SlsaProvenance *SlsaProvenance `json:"slsaProvenance,omitempty"`
    SlsaProvenanceZeroTwo *SlsaProvenanceZeroTwo `json:"slsaProvenanceZeroTwo,omitempty"`
    Subject []Subject `json:"subject,omitempty"`
    
}

