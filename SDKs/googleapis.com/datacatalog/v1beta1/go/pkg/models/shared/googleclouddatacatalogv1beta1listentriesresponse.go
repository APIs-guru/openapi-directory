package shared

type GoogleCloudDatacatalogV1beta1ListEntriesResponse struct {
	Entries       []GoogleCloudDatacatalogV1beta1Entry `json:"entries,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
