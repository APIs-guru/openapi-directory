import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RotateServerCaContext } from "./rotateservercacontext";


// InstancesRotateServerCaRequest
/** 
 * Rotate Server CA request.
**/
export class InstancesRotateServerCaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rotateServerCaContext" })
  rotateServerCaContext?: RotateServerCaContext;
}
