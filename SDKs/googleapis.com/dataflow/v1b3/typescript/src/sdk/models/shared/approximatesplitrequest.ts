import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Position } from "./position";


// ApproximateSplitRequest
/** 
 * A suggestion by the service to the worker to dynamically split the WorkItem.
**/
export class ApproximateSplitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fractionConsumed" })
  fractionConsumed?: number;

  @Metadata({ data: "json, name=fractionOfRemainder" })
  fractionOfRemainder?: number;

  @Metadata({ data: "json, name=position" })
  position?: Position;
}
