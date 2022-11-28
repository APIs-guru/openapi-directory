package shared

// GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo
// Information describing query expansion including whether expansion has occurred.
type GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo struct {
	ExpandedQuery     *bool   `json:"expandedQuery,omitempty"`
	PinnedResultCount *string `json:"pinnedResultCount,omitempty"`
}
