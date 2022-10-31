package shared




type BillingProfileInvoiceLevelEnum string

const (
    BillingProfileInvoiceLevelEnumAccountLevel BillingProfileInvoiceLevelEnum = "ACCOUNT_LEVEL"
BillingProfileInvoiceLevelEnumAdvertiserLevel BillingProfileInvoiceLevelEnum = "ADVERTISER_LEVEL"
BillingProfileInvoiceLevelEnumCampaignLevel BillingProfileInvoiceLevelEnum = "CAMPAIGN_LEVEL"
)



type BillingProfileStatusEnum string

const (
    BillingProfileStatusEnumUnderReview BillingProfileStatusEnum = "UNDER_REVIEW"
BillingProfileStatusEnumActive BillingProfileStatusEnum = "ACTIVE"
BillingProfileStatusEnumArchived BillingProfileStatusEnum = "ARCHIVED"
)


type BillingProfile struct {
    ConsolidatedInvoice *bool `json:"consolidatedInvoice,omitempty"`
    CountryCode *string `json:"countryCode,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    ID *string `json:"id,omitempty"`
    InvoiceLevel *BillingProfileInvoiceLevelEnum `json:"invoiceLevel,omitempty"`
    IsDefault *bool `json:"isDefault,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    PaymentsAccountID *string `json:"paymentsAccountId,omitempty"`
    PaymentsCustomerID *string `json:"paymentsCustomerId,omitempty"`
    PurchaseOrder *string `json:"purchaseOrder,omitempty"`
    SecondaryPaymentsCustomerID *string `json:"secondaryPaymentsCustomerId,omitempty"`
    Status *BillingProfileStatusEnum `json:"status,omitempty"`
    
}

