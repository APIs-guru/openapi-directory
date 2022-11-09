import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Config } from "./config";
export declare enum WebSecurityScannerSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Resource capturing the settings for the Web Security Scanner service.
**/
export declare class WebSecurityScannerSettings extends SpeakeasyBase {
    modules?: Map<string, Config>;
    name?: string;
    serviceEnablementState?: WebSecurityScannerSettingsServiceEnablementStateEnum;
    updateTime?: string;
}
