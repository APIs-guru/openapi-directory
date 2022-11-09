import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubNotificationSettings
/** 
 * Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
**/
export class PubsubNotificationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudTopicName" })
  cloudTopicName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=registeredEvents" })
  registeredEvents?: string[];
}
