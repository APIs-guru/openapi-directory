import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// ComputeMessageStatsRequest
/** 
 * Compute statistics about a range of messages in a given topic and partition.
**/
export class ComputeMessageStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endCursor" })
  endCursor?: Cursor;

  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;

  @SpeakeasyMetadata({ data: "json, name=startCursor" })
  startCursor?: Cursor;
}
