import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterContext } from "./demotemastercontext";



// InstancesDemoteMasterRequest
/** 
 * Database demote primary instance request.
**/
export class InstancesDemoteMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=demoteMasterContext" })
  demoteMasterContext?: DemoteMasterContext;
}
