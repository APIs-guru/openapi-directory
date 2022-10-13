package shared

type AnnotatedGeneRequest struct {
	AccID           *string  `json:"accId"`
	EvidenceCodes   []string `json:"evidenceCodes"`
	SpeciesTypeKeys []int32  `json:"speciesTypeKeys"`
}
