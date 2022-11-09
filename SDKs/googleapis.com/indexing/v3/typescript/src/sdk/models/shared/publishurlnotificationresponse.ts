import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlNotificationMetadata } from "./urlnotificationmetadata";


// PublishUrlNotificationResponse
/** 
 * Output for PublishUrlNotification
**/
export class PublishUrlNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=urlNotificationMetadata" })
  urlNotificationMetadata?: UrlNotificationMetadata;
}
