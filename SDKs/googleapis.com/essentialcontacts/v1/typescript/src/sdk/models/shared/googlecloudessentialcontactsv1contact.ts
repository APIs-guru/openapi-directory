import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum {
    NotificationCategoryUnspecified = "NOTIFICATION_CATEGORY_UNSPECIFIED"
,    All = "ALL"
,    Suspension = "SUSPENSION"
,    Security = "SECURITY"
,    Technical = "TECHNICAL"
,    Billing = "BILLING"
,    Legal = "LEGAL"
,    ProductUpdates = "PRODUCT_UPDATES"
,    TechnicalIncidents = "TECHNICAL_INCIDENTS"
}

export enum GoogleCloudEssentialcontactsV1ContactValidationStateEnum {
    ValidationStateUnspecified = "VALIDATION_STATE_UNSPECIFIED"
,    Valid = "VALID"
,    Invalid = "INVALID"
}


// GoogleCloudEssentialcontactsV1Contact
/** 
 * A contact that will receive notifications from Google Cloud.
**/
export class GoogleCloudEssentialcontactsV1Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=languageTag" })
  languageTag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationCategorySubscriptions" })
  notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];

  @Metadata({ data: "json, name=validateTime" })
  validateTime?: string;

  @Metadata({ data: "json, name=validationState" })
  validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
