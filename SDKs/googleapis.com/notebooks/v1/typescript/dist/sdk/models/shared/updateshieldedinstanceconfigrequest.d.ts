import { SpeakeasyBase } from "../../../internal/utils";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
/**
 * Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
**/
export declare class UpdateShieldedInstanceConfigRequest extends SpeakeasyBase {
    shieldedInstanceConfig?: ShieldedInstanceConfig;
}
