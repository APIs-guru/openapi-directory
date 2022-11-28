package shared

// IDFilter
// A filtering option that filters entities by their entity IDs.
type IDFilter struct {
	AdGroupAdIds      []string `json:"adGroupAdIds,omitempty"`
	AdGroupIds        []string `json:"adGroupIds,omitempty"`
	CampaignIds       []string `json:"campaignIds,omitempty"`
	InsertionOrderIds []string `json:"insertionOrderIds,omitempty"`
	LineItemIds       []string `json:"lineItemIds,omitempty"`
	MediaProductIds   []string `json:"mediaProductIds,omitempty"`
}
