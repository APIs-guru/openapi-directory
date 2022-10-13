package shared

type GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse struct {
	NextPageToken *string                                 `json:"nextPageToken"`
	Taxonomies    []GoogleCloudDatacatalogV1beta1Taxonomy `json:"taxonomies"`
}
