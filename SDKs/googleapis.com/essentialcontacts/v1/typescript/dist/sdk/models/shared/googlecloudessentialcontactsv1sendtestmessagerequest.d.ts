import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum {
    NotificationCategoryUnspecified = "NOTIFICATION_CATEGORY_UNSPECIFIED",
    All = "ALL",
    Suspension = "SUSPENSION",
    Security = "SECURITY",
    Technical = "TECHNICAL",
    Billing = "BILLING",
    Legal = "LEGAL",
    ProductUpdates = "PRODUCT_UPDATES",
    TechnicalIncidents = "TECHNICAL_INCIDENTS"
}
/**
 * Request message for the SendTestMessage method.
**/
export declare class GoogleCloudEssentialcontactsV1SendTestMessageRequest extends SpeakeasyBase {
    contacts?: string[];
    notificationCategory?: GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum;
}
