package shared



type AnnotationRequest struct {
    EvidenceCodes []string `json:"evidenceCodes,omitempty"`
    Ids []string `json:"ids,omitempty"`
    SpeciesTypeKeys []int32 `json:"speciesTypeKeys,omitempty"`
    TermAcc *string `json:"termAcc,omitempty"`
    
}

