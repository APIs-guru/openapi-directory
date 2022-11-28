import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubNotificationSettings
/** 
 * Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
**/
export class PubsubNotificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudTopicName" })
  cloudTopicName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=registeredEvents" })
  registeredEvents?: string[];
}
