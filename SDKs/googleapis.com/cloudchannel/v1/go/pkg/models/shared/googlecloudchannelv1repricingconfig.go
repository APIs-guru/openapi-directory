package shared

type GoogleCloudChannelV1RepricingConfigRebillingBasisEnum string

const (
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumRebillingBasisUnspecified GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "REBILLING_BASIS_UNSPECIFIED"
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumCostAtList                GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "COST_AT_LIST"
	GoogleCloudChannelV1RepricingConfigRebillingBasisEnumDirectCustomerCost        GoogleCloudChannelV1RepricingConfigRebillingBasisEnum = "DIRECT_CUSTOMER_COST"
)

type GoogleCloudChannelV1RepricingConfig struct {
	Adjustment                *GoogleCloudChannelV1RepricingAdjustment                   `json:"adjustment"`
	ChannelPartnerGranularity map[string]interface{}                                     `json:"channelPartnerGranularity"`
	EffectiveInvoiceMonth     *GoogleTypeDate                                            `json:"effectiveInvoiceMonth"`
	EntitlementGranularity    *GoogleCloudChannelV1RepricingConfigEntitlementGranularity `json:"entitlementGranularity"`
	RebillingBasis            *GoogleCloudChannelV1RepricingConfigRebillingBasisEnum     `json:"rebillingBasis"`
}
