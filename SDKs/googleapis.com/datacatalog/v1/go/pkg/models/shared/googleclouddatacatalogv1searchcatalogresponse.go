package shared

type GoogleCloudDatacatalogV1SearchCatalogResponse struct {
	NextPageToken *string                                       `json:"nextPageToken"`
	Results       []GoogleCloudDatacatalogV1SearchCatalogResult `json:"results"`
	Unreachable   []string                                      `json:"unreachable"`
}
