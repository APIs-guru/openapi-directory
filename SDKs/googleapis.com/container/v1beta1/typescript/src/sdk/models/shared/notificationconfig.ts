import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubSub } from "./pubsub";


// NotificationConfig
/** 
 * NotificationConfig is the configuration of notifications.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsub" })
  pubsub?: PubSub;
}
