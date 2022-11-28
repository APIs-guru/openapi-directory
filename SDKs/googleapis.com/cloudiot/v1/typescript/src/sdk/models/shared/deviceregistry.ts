import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryCredential } from "./registrycredential";
import { EventNotificationConfig } from "./eventnotificationconfig";
import { HttpConfig } from "./httpconfig";
import { MqttConfig } from "./mqttconfig";
import { StateNotificationConfig } from "./statenotificationconfig";


export enum DeviceRegistryLogLevelEnum {
    LogLevelUnspecified = "LOG_LEVEL_UNSPECIFIED",
    None = "NONE",
    Error = "ERROR",
    Info = "INFO",
    Debug = "DEBUG"
}


// DeviceRegistry
/** 
 * A container for a group of devices.
**/
export class DeviceRegistry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: RegistryCredential })
  credentials?: RegistryCredential[];

  @SpeakeasyMetadata({ data: "json, name=eventNotificationConfigs", elemType: EventNotificationConfig })
  eventNotificationConfigs?: EventNotificationConfig[];

  @SpeakeasyMetadata({ data: "json, name=httpConfig" })
  httpConfig?: HttpConfig;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: DeviceRegistryLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=mqttConfig" })
  mqttConfig?: MqttConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stateNotificationConfig" })
  stateNotificationConfig?: StateNotificationConfig;
}
