import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DemoteMasterContext } from "./demotemastercontext";


// InstancesDemoteMasterRequest
/** 
 * Database demote primary instance request.
**/
export class InstancesDemoteMasterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=demoteMasterContext" })
  demoteMasterContext?: DemoteMasterContext;
}
