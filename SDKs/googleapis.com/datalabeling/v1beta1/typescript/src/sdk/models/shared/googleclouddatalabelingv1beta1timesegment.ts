import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1TimeSegment
/** 
 * A time period inside of an example that has a time dimension (e.g. video).
**/
export class GoogleCloudDatalabelingV1beta1TimeSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
