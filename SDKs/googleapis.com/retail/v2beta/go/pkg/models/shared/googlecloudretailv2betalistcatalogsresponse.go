package shared

// GoogleCloudRetailV2betaListCatalogsResponse
// Response for CatalogService.ListCatalogs method.
type GoogleCloudRetailV2betaListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2betaCatalog `json:"catalogs,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
