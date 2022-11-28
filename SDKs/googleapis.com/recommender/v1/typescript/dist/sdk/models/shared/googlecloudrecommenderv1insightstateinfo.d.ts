import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommenderV1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Accepted = "ACCEPTED",
    Dismissed = "DISMISSED"
}
/**
 * Information related to insight state.
**/
export declare class GoogleCloudRecommenderV1InsightStateInfo extends SpeakeasyBase {
    state?: GoogleCloudRecommenderV1InsightStateInfoStateEnum;
    stateMetadata?: Map<string, string>;
}
