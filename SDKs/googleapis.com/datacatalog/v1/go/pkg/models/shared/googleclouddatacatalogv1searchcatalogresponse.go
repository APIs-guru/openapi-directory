package shared

// GoogleCloudDatacatalogV1SearchCatalogResponse
// Response message for SearchCatalog.
type GoogleCloudDatacatalogV1SearchCatalogResponse struct {
	NextPageToken *string                                       `json:"nextPageToken,omitempty"`
	Results       []GoogleCloudDatacatalogV1SearchCatalogResult `json:"results,omitempty"`
	Unreachable   []string                                      `json:"unreachable,omitempty"`
}
