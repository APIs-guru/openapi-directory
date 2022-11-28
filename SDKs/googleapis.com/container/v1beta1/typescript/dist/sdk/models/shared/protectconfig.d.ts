import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadConfig } from "./workloadconfig";
export declare enum ProtectConfigWorkloadVulnerabilityModeEnum {
    WorkloadVulnerabilityModeUnspecified = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Basic = "BASIC"
}
/**
 * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
**/
export declare class ProtectConfig extends SpeakeasyBase {
    workloadConfig?: WorkloadConfig;
    workloadVulnerabilityMode?: ProtectConfigWorkloadVulnerabilityModeEnum;
}
