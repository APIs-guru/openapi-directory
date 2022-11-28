import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeTarget } from "./timetarget";



// ComputeTimeCursorRequest
/** 
 * Compute the corresponding cursor for a publish or event time in a topic partition.
**/
export class ComputeTimeCursorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TimeTarget;
}
