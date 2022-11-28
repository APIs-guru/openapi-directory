import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterInstanceRequest
/** 
 * Request for registering a notebook instance.
**/
export class RegisterInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;
}
