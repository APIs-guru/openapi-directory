import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloneContext } from "./clonecontext";



// InstancesCloneRequest
/** 
 * Database instance clone request.
**/
export class InstancesCloneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloneContext" })
  cloneContext?: CloneContext;
}
