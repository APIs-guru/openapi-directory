import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";



// ApproximateSplitRequest
/** 
 * A suggestion by the service to the worker to dynamically split the WorkItem.
**/
export class ApproximateSplitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fractionConsumed" })
  fractionConsumed?: number;

  @SpeakeasyMetadata({ data: "json, name=fractionOfRemainder" })
  fractionOfRemainder?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Position;
}
