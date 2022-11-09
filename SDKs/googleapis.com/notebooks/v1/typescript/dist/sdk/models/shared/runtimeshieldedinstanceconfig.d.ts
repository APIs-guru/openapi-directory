import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
**/
export declare class RuntimeShieldedInstanceConfig extends SpeakeasyBase {
    enableIntegrityMonitoring?: boolean;
    enableSecureBoot?: boolean;
    enableVtpm?: boolean;
}
