import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum {
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

export enum GoogleCloudEssentialcontactsV1ContactValidationStateEnum {
    ValidationStateUnspecified = "VALIDATION_STATE_UNSPECIFIED",
    Valid = "VALID",
    Invalid = "INVALID"
}


// GoogleCloudEssentialcontactsV1Contact
/** 
 * A contact that will receive notifications from Google Cloud.
**/
export class GoogleCloudEssentialcontactsV1Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languageTag" })
  languageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationCategorySubscriptions" })
  notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=validateTime" })
  validateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validationState" })
  validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}


// GoogleCloudEssentialcontactsV1ContactInput
/** 
 * A contact that will receive notifications from Google Cloud.
**/
export class GoogleCloudEssentialcontactsV1ContactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=languageTag" })
  languageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationCategorySubscriptions" })
  notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=validateTime" })
  validateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validationState" })
  validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
