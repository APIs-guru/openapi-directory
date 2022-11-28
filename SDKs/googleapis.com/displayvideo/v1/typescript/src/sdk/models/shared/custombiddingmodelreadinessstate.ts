import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomBiddingModelReadinessStateReadinessStateEnum {
    ReadinessStateUnspecified = "READINESS_STATE_UNSPECIFIED",
    ReadinessStateActive = "READINESS_STATE_ACTIVE",
    ReadinessStateInsufficientData = "READINESS_STATE_INSUFFICIENT_DATA",
    ReadinessStateTraining = "READINESS_STATE_TRAINING",
    ReadinessStateNoValidScript = "READINESS_STATE_NO_VALID_SCRIPT"
}


// CustomBiddingModelReadinessState
/** 
 * The custom bidding algorithm model readiness state for a single shared advertiser.
**/
export class CustomBiddingModelReadinessState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=readinessState" })
  readinessState?: CustomBiddingModelReadinessStateReadinessStateEnum;
}
