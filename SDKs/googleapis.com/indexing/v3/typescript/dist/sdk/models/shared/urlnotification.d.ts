import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UrlNotificationTypeEnum {
    UrlNotificationTypeUnspecified = "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    UrlUpdated = "URL_UPDATED",
    UrlDeleted = "URL_DELETED"
}
/**
 * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
**/
export declare class UrlNotification extends SpeakeasyBase {
    notifyTime?: string;
    type?: UrlNotificationTypeEnum;
    url?: string;
}
