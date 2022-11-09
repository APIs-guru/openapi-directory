import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UrlNotificationTypeEnum {
    UrlNotificationTypeUnspecified = "URL_NOTIFICATION_TYPE_UNSPECIFIED"
,    UrlUpdated = "URL_UPDATED"
,    UrlDeleted = "URL_DELETED"
}


// UrlNotification
/** 
 * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
**/
export class UrlNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifyTime" })
  notifyTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: UrlNotificationTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
