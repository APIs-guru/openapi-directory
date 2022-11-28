import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementBinauthzVersion } from "./configmanagementbinauthzversion";
export declare enum ConfigManagementBinauthzStateWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State for Binauthz
**/
export declare class ConfigManagementBinauthzState extends SpeakeasyBase {
    version?: ConfigManagementBinauthzVersion;
    webhook?: ConfigManagementBinauthzStateWebhookEnum;
}
