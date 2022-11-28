import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SegmentSettings
/** 
 * Segment settings for `"ts"`, `"fmp4"` and `"vtt"`.
**/
export class SegmentSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=individualSegments" })
  individualSegments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segmentDuration" })
  segmentDuration?: string;
}
