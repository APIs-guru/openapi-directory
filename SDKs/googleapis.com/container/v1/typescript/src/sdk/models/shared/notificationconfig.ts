import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubSub } from "./pubsub";



// NotificationConfig
/** 
 * NotificationConfig is the configuration of notifications.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsub" })
  pubsub?: PubSub;
}
