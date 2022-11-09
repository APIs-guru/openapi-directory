import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceConfig } from "./deviceconfig";
import { DeviceCredential } from "./devicecredential";
import { GatewayConfig } from "./gatewayconfig";
import { Status } from "./status";
import { DeviceState } from "./devicestate";
export declare enum DeviceLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}
/**
 * The device resource.
**/
export declare class Device extends SpeakeasyBase {
    blocked?: boolean;
    config?: DeviceConfig;
    credentials?: DeviceCredential[];
    gatewayConfig?: GatewayConfig;
    id?: string;
    lastConfigAckTime?: string;
    lastConfigSendTime?: string;
    lastErrorStatus?: Status;
    lastErrorTime?: string;
    lastEventTime?: string;
    lastHeartbeatTime?: string;
    lastStateTime?: string;
    logLevel?: DeviceLogLevelEnum;
    metadata?: Map<string, string>;
    name?: string;
    numId?: string;
    state?: DeviceState;
}
