package shared

type UpdateDeveloperMetadataRequest struct {
	DataFilters       []DataFilter       `json:"dataFilters"`
	DeveloperMetadata *DeveloperMetadata `json:"developerMetadata"`
	Fields            *string            `json:"fields"`
}
