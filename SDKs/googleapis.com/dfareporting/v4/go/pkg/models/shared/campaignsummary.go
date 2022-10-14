package shared

type CampaignSummary struct {
	BillingInvoiceCode *string `json:"billingInvoiceCode,omitempty"`
	CampaignID         *string `json:"campaignId,omitempty"`
	PreTaxAmountMicros *string `json:"preTaxAmountMicros,omitempty"`
	TaxAmountMicros    *string `json:"taxAmountMicros,omitempty"`
	TotalAmountMicros  *string `json:"totalAmountMicros,omitempty"`
}
