package shared

// SearchDeveloperMetadataRequest
// A request to retrieve all developer metadata matching the set of specified criteria.
type SearchDeveloperMetadataRequest struct {
	DataFilters []DataFilter `json:"dataFilters,omitempty"`
}
