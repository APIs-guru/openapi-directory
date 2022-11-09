import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NotificationSettingNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED"
,    GoogleUpdate = "GOOGLE_UPDATE"
,    NewReview = "NEW_REVIEW"
,    UpdatedReview = "UPDATED_REVIEW"
,    NewCustomerMedia = "NEW_CUSTOMER_MEDIA"
,    NewQuestion = "NEW_QUESTION"
,    UpdatedQuestion = "UPDATED_QUESTION"
,    NewAnswer = "NEW_ANSWER"
,    UpdatedAnswer = "UPDATED_ANSWER"
,    DuplicateLocation = "DUPLICATE_LOCATION"
,    LossOfVoiceOfMerchant = "LOSS_OF_VOICE_OF_MERCHANT"
,    VoiceOfMerchantUpdated = "VOICE_OF_MERCHANT_UPDATED"
}


// NotificationSetting
/** 
 * A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
**/
export class NotificationSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationTypes" })
  notificationTypes?: NotificationSettingNotificationTypesEnum[];

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;
}
