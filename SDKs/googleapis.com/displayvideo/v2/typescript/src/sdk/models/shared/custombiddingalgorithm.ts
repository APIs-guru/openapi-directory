import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingModelDetails } from "./custombiddingmodeldetails";


export enum CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum {
    CustomBiddingAlgorithmTypeUnspecified = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED",
    ScriptBased = "SCRIPT_BASED",
    AdsDataHubBased = "ADS_DATA_HUB_BASED",
    GoalBuilderBased = "GOAL_BUILDER_BASED"
}

export enum CustomBiddingAlgorithmEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// CustomBiddingAlgorithm
/** 
 * A single custom bidding algorithm.
**/
export class CustomBiddingAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" })
  customBiddingAlgorithmId?: string;

  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmType" })
  customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=modelDetails", elemType: CustomBiddingModelDetails })
  modelDetails?: CustomBiddingModelDetails[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sharedAdvertiserIds" })
  sharedAdvertiserIds?: string[];
}


// CustomBiddingAlgorithmInput
/** 
 * A single custom bidding algorithm.
**/
export class CustomBiddingAlgorithmInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmType" })
  customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sharedAdvertiserIds" })
  sharedAdvertiserIds?: string[];
}
