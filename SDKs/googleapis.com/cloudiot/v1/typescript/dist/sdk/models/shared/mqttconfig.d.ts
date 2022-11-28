import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MqttConfigMqttEnabledStateEnum {
    MqttStateUnspecified = "MQTT_STATE_UNSPECIFIED",
    MqttEnabled = "MQTT_ENABLED",
    MqttDisabled = "MQTT_DISABLED"
}
/**
 * The configuration of MQTT for a device registry.
**/
export declare class MqttConfig extends SpeakeasyBase {
    mqttEnabledState?: MqttConfigMqttEnabledStateEnum;
}
