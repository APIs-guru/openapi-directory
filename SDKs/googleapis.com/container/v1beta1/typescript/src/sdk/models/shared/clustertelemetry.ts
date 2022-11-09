import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClusterTelemetryTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
,    SystemOnly = "SYSTEM_ONLY"
}


// ClusterTelemetry
/** 
 * Telemetry integration for the cluster.
**/
export class ClusterTelemetry extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: ClusterTelemetryTypeEnum;
}
