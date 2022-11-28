import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlNotification } from "./urlnotification";



// UrlNotificationMetadata
/** 
 * Summary of the most recent Indexing API notifications successfully received, for a given URL.
**/
export class UrlNotificationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestRemove" })
  latestRemove?: UrlNotification;

  @SpeakeasyMetadata({ data: "json, name=latestUpdate" })
  latestUpdate?: UrlNotification;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
