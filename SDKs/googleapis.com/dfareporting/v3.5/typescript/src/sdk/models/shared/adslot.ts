import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdSlotCompatibilityEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum AdSlotPaymentSourceTypeEnum {
    PlanningPaymentSourceTypeAgencyPaid = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID"
,    PlanningPaymentSourceTypePublisherPaid = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
}


// AdSlot
/** 
 * Ad Slot
**/
export class AdSlot extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=compatibility" })
  compatibility?: AdSlotCompatibilityEnum;

  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=linkedPlacementId" })
  linkedPlacementId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentSourceType" })
  paymentSourceType?: AdSlotPaymentSourceTypeEnum;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
