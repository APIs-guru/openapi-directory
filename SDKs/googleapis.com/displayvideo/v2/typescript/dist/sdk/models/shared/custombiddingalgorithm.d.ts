import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingModelDetails } from "./custombiddingmodeldetails";
export declare enum CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum {
    CustomBiddingAlgorithmTypeUnspecified = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED",
    ScriptBased = "SCRIPT_BASED",
    AdsDataHubBased = "ADS_DATA_HUB_BASED",
    GoalBuilderBased = "GOAL_BUILDER_BASED"
}
export declare enum CustomBiddingAlgorithmEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single custom bidding algorithm.
**/
export declare class CustomBiddingAlgorithm extends SpeakeasyBase {
    advertiserId?: string;
    customBiddingAlgorithmId?: string;
    customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
    displayName?: string;
    entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;
    modelDetails?: CustomBiddingModelDetails[];
    name?: string;
    partnerId?: string;
    sharedAdvertiserIds?: string[];
}
/**
 * A single custom bidding algorithm.
**/
export declare class CustomBiddingAlgorithmInput extends SpeakeasyBase {
    advertiserId?: string;
    customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
    displayName?: string;
    entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;
    partnerId?: string;
    sharedAdvertiserIds?: string[];
}
