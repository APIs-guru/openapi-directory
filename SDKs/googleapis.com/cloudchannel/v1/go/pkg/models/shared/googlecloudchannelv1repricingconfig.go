package shared

type GoogleCloudChannelV1RepricingConfigRebillingBasisEnum string

const (
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumRebillingBasisUnspecified GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "REBILLING_BASIS_UNSPECIFIED"
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumCostAtList                GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "COST_AT_LIST"
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumDirectCustomerCost        GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "DIRECT_CUSTOMER_COST"
)

type GoogleCloudChannelV1RepricingConfig struct {
	Adjustment                *GoogleCloudChannelV1RepricingAdjustment                   `json:"adjustment,omitempty"`
	ChannelPartnerGranularity map[string]interface{}                                     `json:"channelPartnerGranularity,omitempty"`
	EffectiveInvoiceMonth     *GoogleTypeDate                                            `json:"effectiveInvoiceMonth,omitempty"`
	EntitlementGranularity    *GoogleCloudChannelV1RepricingConfigEntitlementGranularity `json:"entitlementGranularity,omitempty"`
	RebillingBasis            *GoogleCloudChannelV1RepricingConfigRebillingBasisEnum     `json:"rebillingBasis,omitempty"`
}
