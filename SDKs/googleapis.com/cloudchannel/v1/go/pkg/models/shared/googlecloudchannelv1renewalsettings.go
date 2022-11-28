package shared

type GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum string

const (
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumPaymentPlanUnspecified GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "PAYMENT_PLAN_UNSPECIFIED"
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumCommitment             GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "COMMITMENT"
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumFlexible               GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "FLEXIBLE"
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumFree                   GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "FREE"
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumTrial                  GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "TRIAL"
	GoogleCloudChannelV1RenewalSettingsPaymentPlanEnumOffline                GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum = "OFFLINE"
)

// GoogleCloudChannelV1RenewalSettings
// Renewal settings for renewable Offers.
type GoogleCloudChannelV1RenewalSettings struct {
	EnableRenewal   *bool                                               `json:"enableRenewal,omitempty"`
	PaymentCycle    *GoogleCloudChannelV1Period                         `json:"paymentCycle,omitempty"`
	PaymentPlan     *GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum `json:"paymentPlan,omitempty"`
	ResizeUnitCount *bool                                               `json:"resizeUnitCount,omitempty"`
}
