import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cursor } from "./cursor";
import { Cursor } from "./cursor";


// ComputeMessageStatsRequest
/** 
 * Compute statistics about a range of messages in a given topic and partition.
**/
export class ComputeMessageStatsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endCursor" })
  endCursor?: Cursor;

  @Metadata({ data: "json, name=partition" })
  partition?: string;

  @Metadata({ data: "json, name=startCursor" })
  startCursor?: Cursor;
}
