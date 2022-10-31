package shared



type AuditAdvertiserResponse struct {
    AdGroupCriteriaCount *string `json:"adGroupCriteriaCount,omitempty"`
    CampaignCriteriaCount *string `json:"campaignCriteriaCount,omitempty"`
    ChannelsCount *string `json:"channelsCount,omitempty"`
    NegativeKeywordListsCount *string `json:"negativeKeywordListsCount,omitempty"`
    NegativelyTargetedChannelsCount *string `json:"negativelyTargetedChannelsCount,omitempty"`
    UsedCampaignsCount *string `json:"usedCampaignsCount,omitempty"`
    UsedInsertionOrdersCount *string `json:"usedInsertionOrdersCount,omitempty"`
    UsedLineItemsCount *string `json:"usedLineItemsCount,omitempty"`
    
}

