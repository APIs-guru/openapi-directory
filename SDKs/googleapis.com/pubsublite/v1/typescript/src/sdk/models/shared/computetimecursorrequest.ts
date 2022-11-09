import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeTarget } from "./timetarget";


// ComputeTimeCursorRequest
/** 
 * Compute the corresponding cursor for a publish or event time in a topic partition.
**/
export class ComputeTimeCursorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=partition" })
  partition?: string;

  @Metadata({ data: "json, name=target" })
  target?: TimeTarget;
}
