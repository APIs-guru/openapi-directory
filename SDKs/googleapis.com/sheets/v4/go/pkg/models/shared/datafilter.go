package shared

// DataFilter
// Filter that describes what data should be selected or returned from a request.
type DataFilter struct {
	A1Range                 *string                  `json:"a1Range,omitempty"`
	DeveloperMetadataLookup *DeveloperMetadataLookup `json:"developerMetadataLookup,omitempty"`
	GridRange               *GridRange               `json:"gridRange,omitempty"`
}
