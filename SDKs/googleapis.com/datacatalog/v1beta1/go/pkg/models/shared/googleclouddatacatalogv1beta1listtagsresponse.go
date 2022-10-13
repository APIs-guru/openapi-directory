package shared

type GoogleCloudDatacatalogV1beta1ListTagsResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Tags          []GoogleCloudDatacatalogV1beta1Tag `json:"tags"`
}
