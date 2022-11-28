package shared

// BuildDetails
// Message encapsulating build provenance details.
type BuildDetails struct {
	IntotoProvenance *InTotoProvenance `json:"intotoProvenance,omitempty"`
	IntotoStatement  *InTotoStatement  `json:"intotoStatement,omitempty"`
	Provenance       *BuildProvenance  `json:"provenance,omitempty"`
	ProvenanceBytes  *string           `json:"provenanceBytes,omitempty"`
}
