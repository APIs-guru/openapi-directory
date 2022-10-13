package shared

type GoogleCloudRetailV2SearchResponse struct {
	AppliedControls            []string                                                      `json:"appliedControls"`
	AttributionToken           *string                                                       `json:"attributionToken"`
	CorrectedQuery             *string                                                       `json:"correctedQuery"`
	Facets                     []GoogleCloudRetailV2SearchResponseFacet                      `json:"facets"`
	InvalidConditionBoostSpecs []GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs"`
	NextPageToken              *string                                                       `json:"nextPageToken"`
	QueryExpansionInfo         *GoogleCloudRetailV2SearchResponseQueryExpansionInfo          `json:"queryExpansionInfo"`
	RedirectURI                *string                                                       `json:"redirectUri"`
	Results                    []GoogleCloudRetailV2SearchResponseSearchResult               `json:"results"`
	TotalSize                  *int32                                                        `json:"totalSize"`
}
