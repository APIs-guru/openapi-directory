import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveProjectRequest
/** 
 * The request sent to MoveProject method.
**/
export class MoveProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationParent" })
  destinationParent?: string;
}
