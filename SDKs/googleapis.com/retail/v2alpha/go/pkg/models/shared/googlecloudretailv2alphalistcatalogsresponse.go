package shared

type GoogleCloudRetailV2alphaListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2alphaCatalog `json:"catalogs,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
