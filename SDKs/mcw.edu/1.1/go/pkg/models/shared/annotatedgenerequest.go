package shared



type AnnotatedGeneRequest struct {
    AccID *string `json:"accId,omitempty"`
    EvidenceCodes []string `json:"evidenceCodes,omitempty"`
    SpeciesTypeKeys []int32 `json:"speciesTypeKeys,omitempty"`
    
}

