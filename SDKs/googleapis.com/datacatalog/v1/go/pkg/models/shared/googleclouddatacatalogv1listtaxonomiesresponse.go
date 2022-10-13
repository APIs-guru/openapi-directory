package shared

type GoogleCloudDatacatalogV1ListTaxonomiesResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Taxonomies    []GoogleCloudDatacatalogV1Taxonomy `json:"taxonomies"`
}
