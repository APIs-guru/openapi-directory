package shared

type MatchedDeveloperMetadata struct {
	DataFilters       []DataFilter       `json:"dataFilters"`
	DeveloperMetadata *DeveloperMetadata `json:"developerMetadata"`
}
