package shared

// GoogleCloudDatacatalogV1ImportTaxonomiesRequest
// Request message for ImportTaxonomies.
type GoogleCloudDatacatalogV1ImportTaxonomiesRequest struct {
	CrossRegionalSource *GoogleCloudDatacatalogV1CrossRegionalSource `json:"crossRegionalSource,omitempty"`
	InlineSource        *GoogleCloudDatacatalogV1InlineSource        `json:"inlineSource,omitempty"`
}
