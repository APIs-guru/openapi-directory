import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum {
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
export declare enum GoogleCloudEssentialcontactsV1ContactValidationStateEnum {
    ValidationStateUnspecified = "VALIDATION_STATE_UNSPECIFIED",
    Valid = "VALID",
    Invalid = "INVALID"
}
/**
 * A contact that will receive notifications from Google Cloud.
**/
export declare class GoogleCloudEssentialcontactsV1Contact extends SpeakeasyBase {
    email?: string;
    languageTag?: string;
    name?: string;
    notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];
    validateTime?: string;
    validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
/**
 * A contact that will receive notifications from Google Cloud.
**/
export declare class GoogleCloudEssentialcontactsV1ContactInput extends SpeakeasyBase {
    email?: string;
    languageTag?: string;
    notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];
    validateTime?: string;
    validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
