package shared

type GrafeasV1beta1BuildDetails struct {
	Provenance      *BuildProvenance `json:"provenance"`
	ProvenanceBytes *string          `json:"provenanceBytes"`
}
