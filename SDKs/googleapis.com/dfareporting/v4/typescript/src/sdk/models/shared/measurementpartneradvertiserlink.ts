import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MeasurementPartnerAdvertiserLinkLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED",
    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED",
    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING",
    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE",
    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT",
    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING",
    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING",
    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}

export enum MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum {
    None = "NONE",
    IntegralAdScience = "INTEGRAL_AD_SCIENCE",
    DoubleVerify = "DOUBLE_VERIFY"
}


export class MeasurementPartnerAdvertiserLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkStatus" })
  linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=measurementPartner" })
  measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;

  @SpeakeasyMetadata({ data: "json, name=partnerAdvertiserId" })
  partnerAdvertiserId?: string;
}
