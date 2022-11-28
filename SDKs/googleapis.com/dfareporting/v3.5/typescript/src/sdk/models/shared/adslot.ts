import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdSlotCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum AdSlotPaymentSourceTypeEnum {
    PlanningPaymentSourceTypeAgencyPaid = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID",
    PlanningPaymentSourceTypePublisherPaid = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
}


// AdSlot
/** 
 * Ad Slot
**/
export class AdSlot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: AdSlotCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedPlacementId" })
  linkedPlacementId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentSourceType" })
  paymentSourceType?: AdSlotPaymentSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
