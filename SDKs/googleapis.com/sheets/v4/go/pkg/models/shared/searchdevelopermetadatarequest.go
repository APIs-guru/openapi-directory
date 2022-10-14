package shared

type SearchDeveloperMetadataRequest struct {
	DataFilters []DataFilter `json:"dataFilters,omitempty"`
}
