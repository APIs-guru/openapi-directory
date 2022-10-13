package shared

type BillingAssignment struct {
	AccountID    *string `json:"accountId"`
	AdvertiserID *string `json:"advertiserId"`
	CampaignID   *string `json:"campaignId"`
	Kind         *string `json:"kind"`
	SubaccountID *string `json:"subaccountId"`
}
