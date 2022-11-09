import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistryCredential } from "./registrycredential";
import { EventNotificationConfig } from "./eventnotificationconfig";
import { HttpConfig } from "./httpconfig";
import { MqttConfig } from "./mqttconfig";
import { StateNotificationConfig } from "./statenotificationconfig";

export enum DeviceRegistryLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Error = "ERROR"
,    Info = "INFO"
,    Debug = "DEBUG"
}


// DeviceRegistry
/** 
 * A container for a group of devices.
**/
export class DeviceRegistry extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials", elemType: shared.RegistryCredential })
  credentials?: RegistryCredential[];

  @Metadata({ data: "json, name=eventNotificationConfigs", elemType: shared.EventNotificationConfig })
  eventNotificationConfigs?: EventNotificationConfig[];

  @Metadata({ data: "json, name=httpConfig" })
  httpConfig?: HttpConfig;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logLevel" })
  logLevel?: DeviceRegistryLogLevelEnum;

  @Metadata({ data: "json, name=mqttConfig" })
  mqttConfig?: MqttConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stateNotificationConfig" })
  stateNotificationConfig?: StateNotificationConfig;
}
