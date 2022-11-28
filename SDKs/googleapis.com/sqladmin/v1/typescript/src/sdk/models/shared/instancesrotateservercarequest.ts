import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RotateServerCaContext } from "./rotateservercacontext";



// InstancesRotateServerCaRequest
/** 
 * Rotate server CA request.
**/
export class InstancesRotateServerCaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rotateServerCaContext" })
  rotateServerCaContext?: RotateServerCaContext;
}
