package shared

type MeasurementPartnerCampaignLinkLinkStatusEnum string

const (
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerUnlinked            MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_UNLINKED"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinked              MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINKED"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkPending         MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_PENDING"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkFailure         MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_FAILURE"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkOptOut          MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkOptOutPending   MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkWrappingPending MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
	MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerModeChangePending   MeasurementPartnerCampaignLinkLinkStatusEnum = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
)

type MeasurementPartnerCampaignLinkMeasurementPartnerEnum string

const (
	MeasurementPartnerCampaignLinkMeasurementPartnerEnumNone              MeasurementPartnerCampaignLinkMeasurementPartnerEnum = "NONE"
	MeasurementPartnerCampaignLinkMeasurementPartnerEnumIntegralAdScience MeasurementPartnerCampaignLinkMeasurementPartnerEnum = "INTEGRAL_AD_SCIENCE"
	MeasurementPartnerCampaignLinkMeasurementPartnerEnumDoubleVerify      MeasurementPartnerCampaignLinkMeasurementPartnerEnum = "DOUBLE_VERIFY"
)

type MeasurementPartnerCampaignLink struct {
	LinkStatus         *MeasurementPartnerCampaignLinkLinkStatusEnum         `json:"linkStatus,omitempty"`
	MeasurementPartner *MeasurementPartnerCampaignLinkMeasurementPartnerEnum `json:"measurementPartner,omitempty"`
	PartnerCampaignID  *string                                               `json:"partnerCampaignId,omitempty"`
}
