import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Claimed = "CLAIMED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Dismissed = "DISMISSED"
}


// GoogleCloudRecommenderV1beta1RecommendationStateInfo
/** 
 * Information for state. Contains state and metadata.
**/
export class GoogleCloudRecommenderV1beta1RecommendationStateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
