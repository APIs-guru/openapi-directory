import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StateNotificationConfig
/** 
 * The configuration for notification of new states received from the device.
**/
export class StateNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubTopicName" })
  pubsubTopicName?: string;
}
