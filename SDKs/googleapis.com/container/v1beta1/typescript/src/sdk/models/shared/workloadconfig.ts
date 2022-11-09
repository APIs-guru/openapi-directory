import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WorkloadConfigAuditModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Basic = "BASIC"
,    Baseline = "BASELINE"
,    Restricted = "RESTRICTED"
}


// WorkloadConfig
/** 
 * WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.
**/
export class WorkloadConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditMode" })
  auditMode?: WorkloadConfigAuditModeEnum;
}
