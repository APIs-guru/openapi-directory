import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * Specifies a contiguous range of text.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @Metadata({ data: "json, name=segmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;
}
