import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1beta2VideoSegment
/** 
 * Video segment.
**/
export class GoogleCloudVideointelligenceV1beta2VideoSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
