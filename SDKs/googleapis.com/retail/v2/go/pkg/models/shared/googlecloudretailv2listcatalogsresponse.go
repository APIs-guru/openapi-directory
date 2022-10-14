package shared

type GoogleCloudRetailV2ListCatalogsResponse struct {
	Catalogs      []GoogleCloudRetailV2Catalog `json:"catalogs,omitempty"`
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
}
