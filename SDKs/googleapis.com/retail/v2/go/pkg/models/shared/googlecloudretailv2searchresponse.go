package shared

// GoogleCloudRetailV2SearchResponse
// Response message for SearchService.Search method.
type GoogleCloudRetailV2SearchResponse struct {
	AppliedControls            []string                                                      `json:"appliedControls,omitempty"`
	AttributionToken           *string                                                       `json:"attributionToken,omitempty"`
	CorrectedQuery             *string                                                       `json:"correctedQuery,omitempty"`
	Facets                     []GoogleCloudRetailV2SearchResponseFacet                      `json:"facets,omitempty"`
	InvalidConditionBoostSpecs []GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs,omitempty"`
	NextPageToken              *string                                                       `json:"nextPageToken,omitempty"`
	QueryExpansionInfo         *GoogleCloudRetailV2SearchResponseQueryExpansionInfo          `json:"queryExpansionInfo,omitempty"`
	RedirectURI                *string                                                       `json:"redirectUri,omitempty"`
	Results                    []GoogleCloudRetailV2SearchResponseSearchResult               `json:"results,omitempty"`
	TotalSize                  *int32                                                        `json:"totalSize,omitempty"`
}
