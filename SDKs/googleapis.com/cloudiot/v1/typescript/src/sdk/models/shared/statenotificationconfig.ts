import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StateNotificationConfig
/** 
 * The configuration for notification of new states received from the device.
**/
export class StateNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubTopicName" })
  pubsubTopicName?: string;
}
