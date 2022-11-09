import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Accepted = "ACCEPTED"
,    Dismissed = "DISMISSED"
}


// GoogleCloudRecommenderV1beta1InsightStateInfo
/** 
 * Information related to insight state.
**/
export class GoogleCloudRecommenderV1beta1InsightStateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum;

  @Metadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
