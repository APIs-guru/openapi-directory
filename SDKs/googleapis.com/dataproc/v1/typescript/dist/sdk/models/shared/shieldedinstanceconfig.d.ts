import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
**/
export declare class ShieldedInstanceConfig extends SpeakeasyBase {
    enableIntegrityMonitoring?: boolean;
    enableSecureBoot?: boolean;
    enableVtpm?: boolean;
}
