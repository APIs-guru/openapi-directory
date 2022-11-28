package shared

// GoogleCloudDatacatalogV1ListTagsResponse
// Response message for ListTags.
type GoogleCloudDatacatalogV1ListTagsResponse struct {
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
	Tags          []GoogleCloudDatacatalogV1Tag `json:"tags,omitempty"`
}
