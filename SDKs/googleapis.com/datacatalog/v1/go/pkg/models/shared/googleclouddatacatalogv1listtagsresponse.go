package shared

type GoogleCloudDatacatalogV1ListTagsResponse struct {
	NextPageToken *string                       `json:"nextPageToken"`
	Tags          []GoogleCloudDatacatalogV1Tag `json:"tags"`
}
