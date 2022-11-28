import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UrlNotificationTypeEnum {
    UrlNotificationTypeUnspecified = "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    UrlUpdated = "URL_UPDATED",
    UrlDeleted = "URL_DELETED"
}


// UrlNotification
/** 
 * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
**/
export class UrlNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifyTime" })
  notifyTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UrlNotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
