import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlNotification } from "./urlnotification";
import { UrlNotification } from "./urlnotification";


// UrlNotificationMetadata
/** 
 * Summary of the most recent Indexing API notifications successfully received, for a given URL.
**/
export class UrlNotificationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestRemove" })
  latestRemove?: UrlNotification;

  @Metadata({ data: "json, name=latestUpdate" })
  latestUpdate?: UrlNotification;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
