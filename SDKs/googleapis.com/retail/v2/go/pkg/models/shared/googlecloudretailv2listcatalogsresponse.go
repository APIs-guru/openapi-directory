package shared

// GoogleCloudRetailV2ListCatalogsResponse
// Response for CatalogService.ListCatalogs method.
type GoogleCloudRetailV2ListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2Catalog `json:"catalogs,omitempty"`
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
}
