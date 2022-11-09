import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1VideoSegment
/** 
 * Video segment.
**/
export class GoogleCloudVideointelligenceV1VideoSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
