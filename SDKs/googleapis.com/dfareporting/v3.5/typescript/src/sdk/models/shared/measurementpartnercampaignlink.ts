import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MeasurementPartnerCampaignLinkLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED"
,    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED"
,    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING"
,    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE"
,    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
,    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
,    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
,    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}

export enum MeasurementPartnerCampaignLinkMeasurementPartnerEnum {
    None = "NONE"
,    IntegralAdScience = "INTEGRAL_AD_SCIENCE"
,    DoubleVerify = "DOUBLE_VERIFY"
}


export class MeasurementPartnerCampaignLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkStatus" })
  linkStatus?: MeasurementPartnerCampaignLinkLinkStatusEnum;

  @Metadata({ data: "json, name=measurementPartner" })
  measurementPartner?: MeasurementPartnerCampaignLinkMeasurementPartnerEnum;

  @Metadata({ data: "json, name=partnerCampaignId" })
  partnerCampaignId?: string;
}
