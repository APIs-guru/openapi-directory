package shared

// UpdateDeveloperMetadataRequest
// A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
type UpdateDeveloperMetadataRequest struct {
	DataFilters       []DataFilter       `json:"dataFilters,omitempty"`
	DeveloperMetadata *DeveloperMetadata `json:"developerMetadata,omitempty"`
	Fields            *string            `json:"fields,omitempty"`
}
