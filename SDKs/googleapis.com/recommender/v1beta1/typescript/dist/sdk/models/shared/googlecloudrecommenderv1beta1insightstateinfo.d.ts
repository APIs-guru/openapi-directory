import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Accepted = "ACCEPTED",
    Dismissed = "DISMISSED"
}
/**
 * Information related to insight state.
**/
export declare class GoogleCloudRecommenderV1beta1InsightStateInfo extends SpeakeasyBase {
    state?: GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum;
    stateMetadata?: Map<string, string>;
}
