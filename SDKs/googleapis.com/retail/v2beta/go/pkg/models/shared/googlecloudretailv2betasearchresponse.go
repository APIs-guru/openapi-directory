package shared

type GoogleCloudRetailV2betaSearchResponse struct {
	AppliedControls            []string                                                          `json:"appliedControls"`
	AttributionToken           *string                                                           `json:"attributionToken"`
	CorrectedQuery             *string                                                           `json:"correctedQuery"`
	Facets                     []GoogleCloudRetailV2betaSearchResponseFacet                      `json:"facets"`
	InvalidConditionBoostSpecs []GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs"`
	NextPageToken              *string                                                           `json:"nextPageToken"`
	QueryExpansionInfo         *GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo          `json:"queryExpansionInfo"`
	RedirectURI                *string                                                           `json:"redirectUri"`
	Results                    []GoogleCloudRetailV2betaSearchResponseSearchResult               `json:"results"`
	TotalSize                  *int32                                                            `json:"totalSize"`
}
