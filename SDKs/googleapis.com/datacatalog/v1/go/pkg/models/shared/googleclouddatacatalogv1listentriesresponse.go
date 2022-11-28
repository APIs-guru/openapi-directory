package shared

// GoogleCloudDatacatalogV1ListEntriesResponse
// Response message for ListEntries.
type GoogleCloudDatacatalogV1ListEntriesResponse struct {
	Entries       []GoogleCloudDatacatalogV1Entry `json:"entries,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
