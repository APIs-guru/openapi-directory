import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MeasurementPartnerCampaignLinkLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED",
    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED",
    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING",
    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE",
    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT",
    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING",
    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING",
    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}
export declare enum MeasurementPartnerCampaignLinkMeasurementPartnerEnum {
    None = "NONE",
    IntegralAdScience = "INTEGRAL_AD_SCIENCE",
    DoubleVerify = "DOUBLE_VERIFY"
}
export declare class MeasurementPartnerCampaignLink extends SpeakeasyBase {
    linkStatus?: MeasurementPartnerCampaignLinkLinkStatusEnum;
    measurementPartner?: MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
    partnerCampaignId?: string;
}
