package shared

// CompositeTypesListResponse
// A response that returns all Composite Types supported by Deployment Manager
type CompositeTypesListResponse struct {
	CompositeTypes []CompositeType `json:"compositeTypes,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
