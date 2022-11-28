import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommenderV1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Accepted = "ACCEPTED",
    Dismissed = "DISMISSED"
}


// GoogleCloudRecommenderV1InsightStateInfo
/** 
 * Information related to insight state.
**/
export class GoogleCloudRecommenderV1InsightStateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudRecommenderV1InsightStateInfoStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
