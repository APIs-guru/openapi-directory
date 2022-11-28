package shared

// SearchDeveloperMetadataResponse
// A reply to a developer metadata search request.
type SearchDeveloperMetadataResponse struct {
	MatchedDeveloperMetadata []MatchedDeveloperMetadata `json:"matchedDeveloperMetadata,omitempty"`
}
