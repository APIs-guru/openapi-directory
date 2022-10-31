package shared



type Channel struct {
    AdvertiserID *string `json:"advertiserId,omitempty"`
    ChannelID *string `json:"channelId,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    NegativelyTargetedLineItemCount *string `json:"negativelyTargetedLineItemCount,omitempty"`
    PartnerID *string `json:"partnerId,omitempty"`
    PositivelyTargetedLineItemCount *string `json:"positivelyTargetedLineItemCount,omitempty"`
    
}

