import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomBiddingModelReadinessStateReadinessStateEnum {
    ReadinessStateUnspecified = "READINESS_STATE_UNSPECIFIED",
    ReadinessStateActive = "READINESS_STATE_ACTIVE",
    ReadinessStateInsufficientData = "READINESS_STATE_INSUFFICIENT_DATA",
    ReadinessStateTraining = "READINESS_STATE_TRAINING",
    ReadinessStateNoValidScript = "READINESS_STATE_NO_VALID_SCRIPT"
}
/**
 * The custom bidding algorithm model readiness state for a single shared advertiser.
**/
export declare class CustomBiddingModelReadinessState extends SpeakeasyBase {
    advertiserId?: string;
    readinessState?: CustomBiddingModelReadinessStateReadinessStateEnum;
}
