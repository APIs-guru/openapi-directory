package shared

type AuditAdvertiserResponse struct {
	AdGroupCriteriaCount            *string `json:"adGroupCriteriaCount"`
	CampaignCriteriaCount           *string `json:"campaignCriteriaCount"`
	ChannelsCount                   *string `json:"channelsCount"`
	NegativeKeywordListsCount       *string `json:"negativeKeywordListsCount"`
	NegativelyTargetedChannelsCount *string `json:"negativelyTargetedChannelsCount"`
	UsedCampaignsCount              *string `json:"usedCampaignsCount"`
	UsedInsertionOrdersCount        *string `json:"usedInsertionOrdersCount"`
	UsedLineItemsCount              *string `json:"usedLineItemsCount"`
}
