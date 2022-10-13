package shared

type BuildOccurrence struct {
	IntotoProvenance *InTotoProvenance `json:"intotoProvenance"`
	IntotoStatement  *InTotoStatement  `json:"intotoStatement"`
	Provenance       *BuildProvenance  `json:"provenance"`
	ProvenanceBytes  *string           `json:"provenanceBytes"`
}
