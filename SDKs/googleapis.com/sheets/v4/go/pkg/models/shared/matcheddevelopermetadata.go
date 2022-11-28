package shared

// MatchedDeveloperMetadata
// A developer metadata entry and the data filters specified in the original request that matched it.
type MatchedDeveloperMetadata struct {
	DataFilters       []DataFilter       `json:"dataFilters,omitempty"`
	DeveloperMetadata *DeveloperMetadata `json:"developerMetadata,omitempty"`
}
