package shared

// GoogleCloudDataplexV1ListEntitiesResponse
// List metadata entities response.
type GoogleCloudDataplexV1ListEntitiesResponse struct {
	Entities      []GoogleCloudDataplexV1Entity `json:"entities,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
