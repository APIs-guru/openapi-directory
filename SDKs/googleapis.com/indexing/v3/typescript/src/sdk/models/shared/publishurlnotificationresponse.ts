import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlNotificationMetadata } from "./urlnotificationmetadata";



// PublishUrlNotificationResponse
/** 
 * Output for PublishUrlNotification
**/
export class PublishUrlNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urlNotificationMetadata" })
  urlNotificationMetadata?: UrlNotificationMetadata;
}
