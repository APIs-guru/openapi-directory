import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveProjectRequest
/** 
 * The request sent to MoveProject method.
**/
export class MoveProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationParent" })
  destinationParent?: string;
}
