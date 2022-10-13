package shared

type GoogleCloudRetailV2betaListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2betaCatalog `json:"catalogs"`
	NextPageToken *string                          `json:"nextPageToken"`
}
