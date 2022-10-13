package shared

type InTotoStatement struct {
	Type                  *string                `json:"_type"`
	PredicateType         *string                `json:"predicateType"`
	Provenance            *InTotoProvenance      `json:"provenance"`
	SlsaProvenance        *SlsaProvenance        `json:"slsaProvenance"`
	SlsaProvenanceZeroTwo *SlsaProvenanceZeroTwo `json:"slsaProvenanceZeroTwo"`
	Subject               []Subject              `json:"subject"`
}
