package shared

// BuildOccurrence
// Details of a build occurrence.
type BuildOccurrence struct {
	IntotoProvenance *InTotoProvenance `json:"intotoProvenance,omitempty"`
	IntotoStatement  *InTotoStatement  `json:"intotoStatement,omitempty"`
	Provenance       *BuildProvenance  `json:"provenance,omitempty"`
	ProvenanceBytes  *string           `json:"provenanceBytes,omitempty"`
}
