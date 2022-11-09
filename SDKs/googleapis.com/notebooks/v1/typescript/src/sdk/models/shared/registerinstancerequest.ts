import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterInstanceRequest
/** 
 * Request for registering a notebook instance.
**/
export class RegisterInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;
}
