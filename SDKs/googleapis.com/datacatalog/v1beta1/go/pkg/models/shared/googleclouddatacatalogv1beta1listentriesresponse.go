package shared

// GoogleCloudDatacatalogV1beta1ListEntriesResponse
// Response message for ListEntries.
type GoogleCloudDatacatalogV1beta1ListEntriesResponse struct {
	Entries       []GoogleCloudDatacatalogV1beta1Entry `json:"entries,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
