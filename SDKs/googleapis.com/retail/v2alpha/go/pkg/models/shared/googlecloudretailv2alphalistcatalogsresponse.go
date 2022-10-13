package shared

type GoogleCloudRetailV2alphaListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2alphaCatalog `json:"catalogs"`
	NextPageToken *string                           `json:"nextPageToken"`
}
