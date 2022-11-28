import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryCredential } from "./registrycredential";
import { EventNotificationConfig } from "./eventnotificationconfig";
import { HttpConfig } from "./httpconfig";
import { MqttConfig } from "./mqttconfig";
import { StateNotificationConfig } from "./statenotificationconfig";
export declare enum DeviceRegistryLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}
/**
 * A container for a group of devices.
**/
export declare class DeviceRegistry extends SpeakeasyBase {
    credentials?: RegistryCredential[];
    eventNotificationConfigs?: EventNotificationConfig[];
    httpConfig?: HttpConfig;
    id?: string;
    logLevel?: DeviceRegistryLogLevelEnum;
    mqttConfig?: MqttConfig;
    name?: string;
    stateNotificationConfig?: StateNotificationConfig;
}
