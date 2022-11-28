package shared

// GoogleCloudDatacatalogV1ListTaxonomiesResponse
// Response message for ListTaxonomies.
type GoogleCloudDatacatalogV1ListTaxonomiesResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Taxonomies    []GoogleCloudDatacatalogV1Taxonomy `json:"taxonomies,omitempty"`
}
