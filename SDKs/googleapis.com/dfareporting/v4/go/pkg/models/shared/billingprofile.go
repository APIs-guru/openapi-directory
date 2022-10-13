package shared

type BillingProfileInvoiceLevelEnum string

const (
	BillingProfileInvoiceLevelEnumAccountLevel    BillingProfileInvoiceLevelEnum = "ACCOUNT_LEVEL"
	BillingProfileInvoiceLevelEnumAdvertiserLevel BillingProfileInvoiceLevelEnum = "ADVERTISER_LEVEL"
	BillingProfileInvoiceLevelEnumCampaignLevel   BillingProfileInvoiceLevelEnum = "CAMPAIGN_LEVEL"
)

type BillingProfileStatusEnum string

const (
	BillingProfileStatusEnumUnderReview BillingProfileStatusEnum = "UNDER_REVIEW"
	BillingProfileStatusEnumActive      BillingProfileStatusEnum = "ACTIVE"
	BillingProfileStatusEnumArchived    BillingProfileStatusEnum = "ARCHIVED"
)

type BillingProfile struct {
	ConsolidatedInvoice         *bool                           `json:"consolidatedInvoice"`
	CountryCode                 *string                         `json:"countryCode"`
	CurrencyCode                *string                         `json:"currencyCode"`
	ID                          *string                         `json:"id"`
	InvoiceLevel                *BillingProfileInvoiceLevelEnum `json:"invoiceLevel"`
	IsDefault                   *bool                           `json:"isDefault"`
	Kind                        *string                         `json:"kind"`
	Name                        *string                         `json:"name"`
	PaymentsAccountID           *string                         `json:"paymentsAccountId"`
	PaymentsCustomerID          *string                         `json:"paymentsCustomerId"`
	PurchaseOrder               *string                         `json:"purchaseOrder"`
	SecondaryPaymentsCustomerID *string                         `json:"secondaryPaymentsCustomerId"`
	Status                      *BillingProfileStatusEnum       `json:"status"`
}
