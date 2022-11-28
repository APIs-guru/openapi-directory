import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdSlotCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum AdSlotPaymentSourceTypeEnum {
    PlanningPaymentSourceTypeAgencyPaid = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID",
    PlanningPaymentSourceTypePublisherPaid = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
}
/**
 * Ad Slot
**/
export declare class AdSlot extends SpeakeasyBase {
    comment?: string;
    compatibility?: AdSlotCompatibilityEnum;
    height?: string;
    linkedPlacementId?: string;
    name?: string;
    paymentSourceType?: AdSlotPaymentSourceTypeEnum;
    primary?: boolean;
    width?: string;
}
