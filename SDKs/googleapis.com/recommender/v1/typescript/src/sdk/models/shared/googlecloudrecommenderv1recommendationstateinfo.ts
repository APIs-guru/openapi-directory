import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecommenderV1RecommendationStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Claimed = "CLAIMED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Dismissed = "DISMISSED"
}


// GoogleCloudRecommenderV1RecommendationStateInfo
/** 
 * Information for state. Contains state and metadata.
**/
export class GoogleCloudRecommenderV1RecommendationStateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudRecommenderV1RecommendationStateInfoStateEnum;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
