package shared



type UpdateDeveloperMetadataRequest struct {
    DataFilters []DataFilter `json:"dataFilters,omitempty"`
    DeveloperMetadata *DeveloperMetadata `json:"developerMetadata,omitempty"`
    Fields *string `json:"fields,omitempty"`
    
}

