import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceConfig } from "./instanceconfig";


// UpdateInstanceConfigRequest
/** 
 * Request for updating instance configurations.
**/
export class UpdateInstanceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: InstanceConfig;
}
