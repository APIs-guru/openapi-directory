package shared

type AnnotationRequest struct {
	EvidenceCodes   []string `json:"evidenceCodes"`
	Ids             []string `json:"ids"`
	SpeciesTypeKeys []int32  `json:"speciesTypeKeys"`
	TermAcc         *string  `json:"termAcc"`
}
