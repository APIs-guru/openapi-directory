package shared



type OrthologRequest struct {
    RgdIds []int32 `json:"rgdIds,omitempty"`
    SpeciesTypeKeys []int32 `json:"speciesTypeKeys,omitempty"`
    
}

