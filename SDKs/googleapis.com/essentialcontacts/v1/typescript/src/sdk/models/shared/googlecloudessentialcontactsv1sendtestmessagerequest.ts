import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum {
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


// GoogleCloudEssentialcontactsV1SendTestMessageRequest
/** 
 * Request message for the SendTestMessage method.
**/
export class GoogleCloudEssentialcontactsV1SendTestMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts" })
  contacts?: string[];

  @Metadata({ data: "json, name=notificationCategory" })
  notificationCategory?: GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum;
}
