import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkloadConfigAuditModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Basic = "BASIC",
    Baseline = "BASELINE",
    Restricted = "RESTRICTED"
}
/**
 * WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.
**/
export declare class WorkloadConfig extends SpeakeasyBase {
    auditMode?: WorkloadConfigAuditModeEnum;
}
