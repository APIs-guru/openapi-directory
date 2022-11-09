import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloneContext } from "./clonecontext";


// InstancesCloneRequest
/** 
 * Database instance clone request.
**/
export class InstancesCloneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloneContext" })
  cloneContext?: CloneContext;
}
