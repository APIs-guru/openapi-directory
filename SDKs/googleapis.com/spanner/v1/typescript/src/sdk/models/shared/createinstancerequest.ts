import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";


// CreateInstanceRequest
/** 
 * The request for CreateInstance.
**/
export class CreateInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: Instance;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;
}
