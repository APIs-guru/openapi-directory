package shared

type GoogleCloudDataplexV1ListEntitiesResponse struct {
	Entities      []GoogleCloudDataplexV1Entity `json:"entities"`
	NextPageToken *string                       `json:"nextPageToken"`
}
