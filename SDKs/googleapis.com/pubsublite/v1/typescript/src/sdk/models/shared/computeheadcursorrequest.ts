import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeHeadCursorRequest
/** 
 * Compute the current head cursor for a partition.
**/
export class ComputeHeadCursorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;
}
