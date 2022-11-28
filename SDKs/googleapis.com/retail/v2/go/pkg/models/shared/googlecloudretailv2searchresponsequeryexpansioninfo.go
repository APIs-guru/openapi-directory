package shared

// GoogleCloudRetailV2SearchResponseQueryExpansionInfo
// Information describing query expansion including whether expansion has occurred.
type GoogleCloudRetailV2SearchResponseQueryExpansionInfo struct {
	ExpandedQuery     *bool   `json:"expandedQuery,omitempty"`
	PinnedResultCount *string `json:"pinnedResultCount,omitempty"`
}
