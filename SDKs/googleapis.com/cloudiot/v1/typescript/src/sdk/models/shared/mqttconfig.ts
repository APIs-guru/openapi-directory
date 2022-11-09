import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MqttConfigMqttEnabledStateEnum {
    MqttStateUnspecified = "MQTT_STATE_UNSPECIFIED"
,    MqttEnabled = "MQTT_ENABLED"
,    MqttDisabled = "MQTT_DISABLED"
}


// MqttConfig
/** 
 * The configuration of MQTT for a device registry.
**/
export class MqttConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=mqttEnabledState" })
  mqttEnabledState?: MqttConfigMqttEnabledStateEnum;
}
