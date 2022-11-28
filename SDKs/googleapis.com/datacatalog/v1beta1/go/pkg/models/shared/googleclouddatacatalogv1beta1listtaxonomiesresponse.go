package shared

// GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
// Response message for ListTaxonomies.
type GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Taxonomies    []GoogleCloudDatacatalogV1beta1Taxonomy `json:"taxonomies,omitempty"`
}
