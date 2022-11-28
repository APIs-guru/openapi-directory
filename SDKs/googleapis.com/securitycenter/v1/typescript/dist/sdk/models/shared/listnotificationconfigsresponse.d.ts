import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
/**
 * Response message for listing notification configs.
**/
export declare class ListNotificationConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    notificationConfigs?: NotificationConfig[];
}
