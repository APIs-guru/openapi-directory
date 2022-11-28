import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Specifies a contiguous range of text.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=segmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;
}
