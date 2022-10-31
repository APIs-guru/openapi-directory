package shared



type GoogleCloudRetailV2betaSearchResponse struct {
    AppliedControls []string `json:"appliedControls,omitempty"`
    AttributionToken *string `json:"attributionToken,omitempty"`
    CorrectedQuery *string `json:"correctedQuery,omitempty"`
    Facets []GoogleCloudRetailV2betaSearchResponseFacet `json:"facets,omitempty"`
    InvalidConditionBoostSpecs []GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec `json:"invalidConditionBoostSpecs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    QueryExpansionInfo *GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo `json:"queryExpansionInfo,omitempty"`
    RedirectURI *string `json:"redirectUri,omitempty"`
    Results []GoogleCloudRetailV2betaSearchResponseSearchResult `json:"results,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

