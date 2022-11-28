import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationsNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED",
    GoogleUpdate = "GOOGLE_UPDATE",
    NewReview = "NEW_REVIEW",
    UpdatedReview = "UPDATED_REVIEW",
    NewCustomerMedia = "NEW_CUSTOMER_MEDIA",
    NewQuestion = "NEW_QUESTION",
    UpdatedQuestion = "UPDATED_QUESTION",
    NewAnswer = "NEW_ANSWER",
    UpdatedAnswer = "UPDATED_ANSWER",
    UpdatedLocationState = "UPDATED_LOCATION_STATE"
}
/**
 * A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.
**/
export declare class Notifications extends SpeakeasyBase {
    name?: string;
    notificationTypes?: NotificationsNotificationTypesEnum[];
    topicName?: string;
}
