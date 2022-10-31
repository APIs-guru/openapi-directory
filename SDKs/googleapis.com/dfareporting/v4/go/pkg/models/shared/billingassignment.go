package shared



type BillingAssignment struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    CampaignID *string `json:"campaignId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    
}

