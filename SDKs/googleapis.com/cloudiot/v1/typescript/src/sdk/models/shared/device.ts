import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceConfig } from "./deviceconfig";
import { DeviceCredential } from "./devicecredential";
import { GatewayConfig } from "./gatewayconfig";
import { Status } from "./status";
import { DeviceState } from "./devicestate";

export enum DeviceLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Error = "ERROR"
,    Info = "INFO"
,    Debug = "DEBUG"
}


// Device
/** 
 * The device resource.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=config" })
  config?: DeviceConfig;

  @Metadata({ data: "json, name=credentials", elemType: shared.DeviceCredential })
  credentials?: DeviceCredential[];

  @Metadata({ data: "json, name=gatewayConfig" })
  gatewayConfig?: GatewayConfig;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastConfigAckTime" })
  lastConfigAckTime?: string;

  @Metadata({ data: "json, name=lastConfigSendTime" })
  lastConfigSendTime?: string;

  @Metadata({ data: "json, name=lastErrorStatus" })
  lastErrorStatus?: Status;

  @Metadata({ data: "json, name=lastErrorTime" })
  lastErrorTime?: string;

  @Metadata({ data: "json, name=lastEventTime" })
  lastEventTime?: string;

  @Metadata({ data: "json, name=lastHeartbeatTime" })
  lastHeartbeatTime?: string;

  @Metadata({ data: "json, name=lastStateTime" })
  lastStateTime?: string;

  @Metadata({ data: "json, name=logLevel" })
  logLevel?: DeviceLogLevelEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=numId" })
  numId?: string;

  @Metadata({ data: "json, name=state" })
  state?: DeviceState;
}
