import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Config } from "./config";
export declare enum ContainerThreatDetectionSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Resource capturing the settings for the Container Threat Detection service.
**/
export declare class ContainerThreatDetectionSettings extends SpeakeasyBase {
    modules?: Map<string, Config>;
    name?: string;
    serviceAccount?: string;
    serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;
    updateTime?: string;
}
