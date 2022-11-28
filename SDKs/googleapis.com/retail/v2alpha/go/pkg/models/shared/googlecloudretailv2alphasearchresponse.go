package shared

// GoogleCloudRetailV2alphaSearchResponse
// Response message for SearchService.Search method.
type GoogleCloudRetailV2alphaSearchResponse struct {
	AppliedControls            []string                                                           `json:"appliedControls,omitempty"`
	AttributionToken           *string                                                            `json:"attributionToken,omitempty"`
	CorrectedQuery             *string                                                            `json:"correctedQuery,omitempty"`
	Facets                     []GoogleCloudRetailV2alphaSearchResponseFacet                      `json:"facets,omitempty"`
	InvalidConditionBoostSpecs []GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs,omitempty"`
	NextPageToken              *string                                                            `json:"nextPageToken,omitempty"`
	QueryExpansionInfo         *GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo          `json:"queryExpansionInfo,omitempty"`
	RedirectURI                *string                                                            `json:"redirectUri,omitempty"`
	Results                    []GoogleCloudRetailV2alphaSearchResponseSearchResult               `json:"results,omitempty"`
	TotalSize                  *int32                                                             `json:"totalSize,omitempty"`
}
