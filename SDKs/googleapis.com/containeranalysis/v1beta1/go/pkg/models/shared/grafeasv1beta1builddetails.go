package shared

type GrafeasV1beta1BuildDetails struct {
	Provenance      *BuildProvenance `json:"provenance,omitempty"`
	ProvenanceBytes *string          `json:"provenanceBytes,omitempty"`
}
