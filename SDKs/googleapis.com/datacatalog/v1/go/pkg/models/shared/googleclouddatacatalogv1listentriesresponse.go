package shared

type GoogleCloudDatacatalogV1ListEntriesResponse struct {
	Entries       []GoogleCloudDatacatalogV1Entry `json:"entries"`
	NextPageToken *string                         `json:"nextPageToken"`
}
