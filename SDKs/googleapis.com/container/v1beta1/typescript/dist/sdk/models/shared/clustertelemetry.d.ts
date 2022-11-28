import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClusterTelemetryTypeEnum {
    Unspecified = "UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    SystemOnly = "SYSTEM_ONLY"
}
/**
 * Telemetry integration for the cluster.
**/
export declare class ClusterTelemetry extends SpeakeasyBase {
    type?: ClusterTelemetryTypeEnum;
}
