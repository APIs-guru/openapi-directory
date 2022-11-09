import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MeasurementPartnerAdvertiserLinkLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED"
,    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED"
,    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING"
,    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE"
,    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
,    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
,    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
,    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}

export enum MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum {
    None = "NONE"
,    IntegralAdScience = "INTEGRAL_AD_SCIENCE"
,    DoubleVerify = "DOUBLE_VERIFY"
}


export class MeasurementPartnerAdvertiserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkStatus" })
  linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatusEnum;

  @Metadata({ data: "json, name=measurementPartner" })
  measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;

  @Metadata({ data: "json, name=partnerAdvertiserId" })
  partnerAdvertiserId?: string;
}
