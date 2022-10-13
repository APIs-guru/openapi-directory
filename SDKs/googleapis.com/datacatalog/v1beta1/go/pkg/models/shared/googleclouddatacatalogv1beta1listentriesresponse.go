package shared

type GoogleCloudDatacatalogV1beta1ListEntriesResponse struct {
	Entries       []GoogleCloudDatacatalogV1beta1Entry `json:"entries"`
	NextPageToken *string                              `json:"nextPageToken"`
}
