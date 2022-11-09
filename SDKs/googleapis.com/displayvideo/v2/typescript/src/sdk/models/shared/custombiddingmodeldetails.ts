import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomBiddingModelDetailsReadinessStateEnum {
    ReadinessStateUnspecified = "READINESS_STATE_UNSPECIFIED"
,    ReadinessStateActive = "READINESS_STATE_ACTIVE"
,    ReadinessStateInsufficientData = "READINESS_STATE_INSUFFICIENT_DATA"
,    ReadinessStateTraining = "READINESS_STATE_TRAINING"
,    ReadinessStateNoValidScript = "READINESS_STATE_NO_VALID_SCRIPT"
}

export enum CustomBiddingModelDetailsSuspensionStateEnum {
    SuspensionStateUnspecified = "SUSPENSION_STATE_UNSPECIFIED"
,    SuspensionStateEnabled = "SUSPENSION_STATE_ENABLED"
,    SuspensionStateDormant = "SUSPENSION_STATE_DORMANT"
,    SuspensionStateSuspended = "SUSPENSION_STATE_SUSPENDED"
}


// CustomBiddingModelDetails
/** 
 * The details of a custom bidding algorithm model for a single shared advertiser.
**/
export class CustomBiddingModelDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=readinessState" })
  readinessState?: CustomBiddingModelDetailsReadinessStateEnum;

  @Metadata({ data: "json, name=suspensionState" })
  suspensionState?: CustomBiddingModelDetailsSuspensionStateEnum;
}
