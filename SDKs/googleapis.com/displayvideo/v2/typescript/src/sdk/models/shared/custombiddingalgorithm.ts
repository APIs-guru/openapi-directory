import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomBiddingModelDetails } from "./custombiddingmodeldetails";

export enum CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum {
    CustomBiddingAlgorithmTypeUnspecified = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED"
,    ScriptBased = "SCRIPT_BASED"
,    AdsDataHubBased = "ADS_DATA_HUB_BASED"
,    GoalBuilderBased = "GOAL_BUILDER_BASED"
}

export enum CustomBiddingAlgorithmEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// CustomBiddingAlgorithm
/** 
 * A single custom bidding algorithm.
**/
export class CustomBiddingAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=customBiddingAlgorithmId" })
  customBiddingAlgorithmId?: string;

  @Metadata({ data: "json, name=customBiddingAlgorithmType" })
  customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;

  @Metadata({ data: "json, name=modelDetails", elemType: shared.CustomBiddingModelDetails })
  modelDetails?: CustomBiddingModelDetails[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @Metadata({ data: "json, name=sharedAdvertiserIds" })
  sharedAdvertiserIds?: string[];
}
