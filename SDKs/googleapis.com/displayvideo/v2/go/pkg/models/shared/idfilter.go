package shared

type IDFilter struct {
	AdGroupAdIds      []string `json:"adGroupAdIds"`
	AdGroupIds        []string `json:"adGroupIds"`
	CampaignIds       []string `json:"campaignIds"`
	InsertionOrderIds []string `json:"insertionOrderIds"`
	LineItemIds       []string `json:"lineItemIds"`
	MediaProductIds   []string `json:"mediaProductIds"`
}
