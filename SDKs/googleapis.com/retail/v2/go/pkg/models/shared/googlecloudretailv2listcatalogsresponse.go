package shared

type GoogleCloudRetailV2ListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2Catalog `json:"catalogs"`
	NextPageToken *string                      `json:"nextPageToken"`
}
