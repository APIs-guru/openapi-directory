import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";


// UpdateShieldedInstanceConfigRequest
/** 
 * Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
**/
export class UpdateShieldedInstanceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;
}
