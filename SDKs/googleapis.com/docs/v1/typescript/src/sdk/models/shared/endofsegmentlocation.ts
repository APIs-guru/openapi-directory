import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndOfSegmentLocation
/** 
 * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
**/
export class EndOfSegmentLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=segmentId" })
  segmentId?: string;
}
