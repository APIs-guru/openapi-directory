package shared

type GoogleCloudDatacatalogV1beta1ListTagsResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Tags          []GoogleCloudDatacatalogV1beta1Tag `json:"tags,omitempty"`
}
