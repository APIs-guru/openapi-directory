package shared

type GoogleCloudRetailV2SearchResponseQueryExpansionInfo struct {
	ExpandedQuery     *bool   `json:"expandedQuery,omitempty"`
	PinnedResultCount *string `json:"pinnedResultCount,omitempty"`
}
