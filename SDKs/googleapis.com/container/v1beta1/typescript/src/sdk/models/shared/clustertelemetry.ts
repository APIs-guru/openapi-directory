import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClusterTelemetryTypeEnum {
    Unspecified = "UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    SystemOnly = "SYSTEM_ONLY"
}


// ClusterTelemetry
/** 
 * Telemetry integration for the cluster.
**/
export class ClusterTelemetry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ClusterTelemetryTypeEnum;
}
