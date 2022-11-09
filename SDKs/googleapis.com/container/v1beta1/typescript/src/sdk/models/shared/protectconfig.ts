import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadConfig } from "./workloadconfig";

export enum ProtectConfigWorkloadVulnerabilityModeEnum {
    WorkloadVulnerabilityModeUnspecified = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Basic = "BASIC"
}


// ProtectConfig
/** 
 * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
**/
export class ProtectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=workloadConfig" })
  workloadConfig?: WorkloadConfig;

  @Metadata({ data: "json, name=workloadVulnerabilityMode" })
  workloadVulnerabilityMode?: ProtectConfigWorkloadVulnerabilityModeEnum;
}
