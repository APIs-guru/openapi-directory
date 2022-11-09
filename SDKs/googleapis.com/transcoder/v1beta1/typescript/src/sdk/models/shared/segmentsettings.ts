import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SegmentSettings
/** 
 * Segment settings for `"ts"`, `"fmp4"` and `"vtt"`.
**/
export class SegmentSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=individualSegments" })
  individualSegments?: boolean;

  @Metadata({ data: "json, name=segmentDuration" })
  segmentDuration?: string;
}
