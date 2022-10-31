package shared



type MatchedDeveloperMetadata struct {
    DataFilters []DataFilter `json:"dataFilters,omitempty"`
    DeveloperMetadata *DeveloperMetadata `json:"developerMetadata,omitempty"`
    
}

