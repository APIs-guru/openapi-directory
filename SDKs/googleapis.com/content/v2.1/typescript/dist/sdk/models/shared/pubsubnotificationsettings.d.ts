import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.
**/
export declare class PubsubNotificationSettings extends SpeakeasyBase {
    cloudTopicName?: string;
    kind?: string;
    registeredEvents?: string[];
}
