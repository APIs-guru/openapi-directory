import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MeasurementPartnerWrappingDataLinkStatusEnum {
    MeasurementPartnerUnlinked = "MEASUREMENT_PARTNER_UNLINKED"
,    MeasurementPartnerLinked = "MEASUREMENT_PARTNER_LINKED"
,    MeasurementPartnerLinkPending = "MEASUREMENT_PARTNER_LINK_PENDING"
,    MeasurementPartnerLinkFailure = "MEASUREMENT_PARTNER_LINK_FAILURE"
,    MeasurementPartnerLinkOptOut = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
,    MeasurementPartnerLinkOptOutPending = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
,    MeasurementPartnerLinkWrappingPending = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
,    MeasurementPartnerModeChangePending = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
}

export enum MeasurementPartnerWrappingDataMeasurementPartnerEnum {
    None = "NONE"
,    IntegralAdScience = "INTEGRAL_AD_SCIENCE"
,    DoubleVerify = "DOUBLE_VERIFY"
}

export enum MeasurementPartnerWrappingDataTagWrappingModeEnum {
    None = "NONE"
,    Blocking = "BLOCKING"
,    Monitoring = "MONITORING"
,    MonitoringOnly = "MONITORING_ONLY"
,    VideoPixelMonitoring = "VIDEO_PIXEL_MONITORING"
,    Tracking = "TRACKING"
,    VpaidMonitoring = "VPAID_MONITORING"
,    VpaidBlocking = "VPAID_BLOCKING"
,    NonVpaidMonitoring = "NON_VPAID_MONITORING"
,    VpaidOnlyMonitoring = "VPAID_ONLY_MONITORING"
,    VpaidOnlyBlocking = "VPAID_ONLY_BLOCKING"
,    VpaidOnlyFiltering = "VPAID_ONLY_FILTERING"
,    VpaidFiltering = "VPAID_FILTERING"
,    NonVpaidFiltering = "NON_VPAID_FILTERING"
}


// MeasurementPartnerWrappingData
/** 
 * Placement tag wrapping
**/
export class MeasurementPartnerWrappingData extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkStatus" })
  linkStatus?: MeasurementPartnerWrappingDataLinkStatusEnum;

  @Metadata({ data: "json, name=measurementPartner" })
  measurementPartner?: MeasurementPartnerWrappingDataMeasurementPartnerEnum;

  @Metadata({ data: "json, name=tagWrappingMode" })
  tagWrappingMode?: MeasurementPartnerWrappingDataTagWrappingModeEnum;

  @Metadata({ data: "json, name=wrappedTag" })
  wrappedTag?: string;
}
