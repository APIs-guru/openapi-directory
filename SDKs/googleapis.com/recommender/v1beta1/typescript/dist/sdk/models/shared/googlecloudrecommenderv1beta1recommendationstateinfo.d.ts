import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Claimed = "CLAIMED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Dismissed = "DISMISSED"
}
/**
 * Information for state. Contains state and metadata.
**/
export declare class GoogleCloudRecommenderV1beta1RecommendationStateInfo extends SpeakeasyBase {
    state?: GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum;
    stateMetadata?: Map<string, string>;
}
