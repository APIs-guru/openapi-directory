package shared

// GrafeasV1beta1BuildDetails
// Details of a build occurrence.
type GrafeasV1beta1BuildDetails struct {
	Provenance      *BuildProvenance `json:"provenance,omitempty"`
	ProvenanceBytes *string          `json:"provenanceBytes,omitempty"`
}
