import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1beta2VideoSegment
/** 
 * Video segment.
**/
export class GoogleCloudVideointelligenceV1beta2VideoSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
