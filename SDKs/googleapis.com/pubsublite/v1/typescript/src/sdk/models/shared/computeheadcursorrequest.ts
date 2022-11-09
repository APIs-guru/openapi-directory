import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeHeadCursorRequest
/** 
 * Compute the current head cursor for a partition.
**/
export class ComputeHeadCursorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=partition" })
  partition?: string;
}
