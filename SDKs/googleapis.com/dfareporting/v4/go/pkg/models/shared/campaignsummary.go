package shared

type CampaignSummary struct {
	BillingInvoiceCode *string `json:"billingInvoiceCode"`
	CampaignID         *string `json:"campaignId"`
	PreTaxAmountMicros *string `json:"preTaxAmountMicros"`
	TaxAmountMicros    *string `json:"taxAmountMicros"`
	TotalAmountMicros  *string `json:"totalAmountMicros"`
}
