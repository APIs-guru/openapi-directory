package shared

// EventDefinitionListResponse
// A ListDefinitions response.
type EventDefinitionListResponse struct {
	Items         []EventDefinition `json:"items,omitempty"`
	Kind          *string           `json:"kind,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
