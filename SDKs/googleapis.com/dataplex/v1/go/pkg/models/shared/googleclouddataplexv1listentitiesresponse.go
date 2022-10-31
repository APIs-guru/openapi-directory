package shared

type GoogleCloudDataplexV1ListEntitiesResponse struct {
	Entities      []GoogleCloudDataplexV1Entity `json:"entities,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
