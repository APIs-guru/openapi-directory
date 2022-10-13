package shared

type GoogleCloudRetailV2alphaSearchResponse struct {
	AppliedControls            []string                                                           `json:"appliedControls"`
	AttributionToken           *string                                                            `json:"attributionToken"`
	CorrectedQuery             *string                                                            `json:"correctedQuery"`
	Facets                     []GoogleCloudRetailV2alphaSearchResponseFacet                      `json:"facets"`
	InvalidConditionBoostSpecs []GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs"`
	NextPageToken              *string                                                            `json:"nextPageToken"`
	QueryExpansionInfo         *GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo          `json:"queryExpansionInfo"`
	RedirectURI                *string                                                            `json:"redirectUri"`
	Results                    []GoogleCloudRetailV2alphaSearchResponseSearchResult               `json:"results"`
	TotalSize                  *int32                                                             `json:"totalSize"`
}
