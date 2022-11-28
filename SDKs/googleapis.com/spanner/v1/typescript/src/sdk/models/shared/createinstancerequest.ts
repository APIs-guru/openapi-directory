import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInput } from "./instance";



// CreateInstanceRequestInput
/** 
 * The request for CreateInstance.
**/
export class CreateInstanceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: InstanceInput;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;
}
