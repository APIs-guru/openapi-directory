package shared

// GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo
// Information describing query expansion including whether expansion has occurred.
type GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo struct {
	ExpandedQuery     *bool   `json:"expandedQuery,omitempty"`
	PinnedResultCount *string `json:"pinnedResultCount,omitempty"`
}
