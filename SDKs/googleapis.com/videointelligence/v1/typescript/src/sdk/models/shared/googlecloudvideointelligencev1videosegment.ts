import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1VideoSegment
/** 
 * Video segment.
**/
export class GoogleCloudVideointelligenceV1VideoSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
