import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Accepted = "ACCEPTED",
    Dismissed = "DISMISSED"
}


// GoogleCloudRecommenderV1beta1InsightStateInfo
/** 
 * Information related to insight state.
**/
export class GoogleCloudRecommenderV1beta1InsightStateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
