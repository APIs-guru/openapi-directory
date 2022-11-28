import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceConfig } from "./deviceconfig";
import { DeviceCredential } from "./devicecredential";
import { GatewayConfig } from "./gatewayconfig";
import { Status } from "./status";
import { DeviceState } from "./devicestate";


export enum DeviceLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}


// Device
/** 
 * The device resource.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: DeviceConfig;

  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: DeviceCredential })
  credentials?: DeviceCredential[];

  @SpeakeasyMetadata({ data: "json, name=gatewayConfig" })
  gatewayConfig?: GatewayConfig;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastConfigAckTime" })
  lastConfigAckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastConfigSendTime" })
  lastConfigSendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastErrorStatus" })
  lastErrorStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=lastErrorTime" })
  lastErrorTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastEventTime" })
  lastEventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastHeartbeatTime" })
  lastHeartbeatTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStateTime" })
  lastStateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: DeviceLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=numId" })
  numId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DeviceState;
}
