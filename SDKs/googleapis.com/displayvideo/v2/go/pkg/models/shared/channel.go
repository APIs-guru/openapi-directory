package shared

type Channel struct {
	AdvertiserID                    *string `json:"advertiserId"`
	ChannelID                       *string `json:"channelId"`
	DisplayName                     *string `json:"displayName"`
	Name                            *string `json:"name"`
	NegativelyTargetedLineItemCount *string `json:"negativelyTargetedLineItemCount"`
	PartnerID                       *string `json:"partnerId"`
	PositivelyTargetedLineItemCount *string `json:"positivelyTargetedLineItemCount"`
}
