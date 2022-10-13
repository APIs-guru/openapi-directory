package shared

type GoogleCloudDatacatalogV1beta1SearchCatalogResponse struct {
	NextPageToken *string                                            `json:"nextPageToken"`
	Results       []GoogleCloudDatacatalogV1beta1SearchCatalogResult `json:"results"`
	Unreachable   []string                                           `json:"unreachable"`
}
