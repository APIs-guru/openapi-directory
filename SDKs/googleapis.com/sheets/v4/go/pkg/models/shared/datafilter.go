package shared



type DataFilter struct {
    A1Range *string `json:"a1Range,omitempty"`
    DeveloperMetadataLookup *DeveloperMetadataLookup `json:"developerMetadataLookup,omitempty"`
    GridRange *GridRange `json:"gridRange,omitempty"`
    
}

