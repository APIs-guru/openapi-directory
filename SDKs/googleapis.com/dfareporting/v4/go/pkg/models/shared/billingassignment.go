package shared

// BillingAssignment
// List account, subaccount, advertiser, and campaign associated with a given Billing Profile.
type BillingAssignment struct {
	AccountID    *string `json:"accountId,omitempty"`
	AdvertiserID *string `json:"advertiserId,omitempty"`
	CampaignID   *string `json:"campaignId,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	SubaccountID *string `json:"subaccountId,omitempty"`
}
