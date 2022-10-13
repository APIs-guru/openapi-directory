package shared

type GoogleCloudDatacatalogV1ImportTaxonomiesRequest struct {
	CrossRegionalSource *GoogleCloudDatacatalogV1CrossRegionalSource `json:"crossRegionalSource"`
	InlineSource        *GoogleCloudDatacatalogV1InlineSource        `json:"inlineSource"`
}
