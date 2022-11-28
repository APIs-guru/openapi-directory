package shared

// GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
// Response message for PrivateCatalog.SearchCatalogs.
type GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse struct {
	Catalogs      []GoogleCloudPrivatecatalogV1beta1Catalog
	NextPageToken *string
}
