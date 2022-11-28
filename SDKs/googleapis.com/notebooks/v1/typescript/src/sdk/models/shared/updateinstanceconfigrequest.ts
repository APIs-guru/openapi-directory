import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";



// UpdateInstanceConfigRequest
/** 
 * Request for updating instance configurations.
**/
export class UpdateInstanceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: InstanceConfig;
}
