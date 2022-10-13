package shared

type BuildDetails struct {
	IntotoProvenance *InTotoProvenance `json:"intotoProvenance"`
	IntotoStatement  *InTotoStatement  `json:"intotoStatement"`
	Provenance       *BuildProvenance  `json:"provenance"`
	ProvenanceBytes  *string           `json:"provenanceBytes"`
}
