package shared

type NotificationSettingNotificationTypesEnum string

const (
	NotificationSettingNotificationTypesEnumNotificationTypeUnspecified NotificationSettingNotificationTypesEnum = "NOTIFICATION_TYPE_UNSPECIFIED"
	NotificationSettingNotificationTypesEnumGoogleUpdate                NotificationSettingNotificationTypesEnum = "GOOGLE_UPDATE"
	NotificationSettingNotificationTypesEnumNewReview                   NotificationSettingNotificationTypesEnum = "NEW_REVIEW"
	NotificationSettingNotificationTypesEnumUpdatedReview               NotificationSettingNotificationTypesEnum = "UPDATED_REVIEW"
	NotificationSettingNotificationTypesEnumNewCustomerMedia            NotificationSettingNotificationTypesEnum = "NEW_CUSTOMER_MEDIA"
	NotificationSettingNotificationTypesEnumNewQuestion                 NotificationSettingNotificationTypesEnum = "NEW_QUESTION"
	NotificationSettingNotificationTypesEnumUpdatedQuestion             NotificationSettingNotificationTypesEnum = "UPDATED_QUESTION"
	NotificationSettingNotificationTypesEnumNewAnswer                   NotificationSettingNotificationTypesEnum = "NEW_ANSWER"
	NotificationSettingNotificationTypesEnumUpdatedAnswer               NotificationSettingNotificationTypesEnum = "UPDATED_ANSWER"
	NotificationSettingNotificationTypesEnumDuplicateLocation           NotificationSettingNotificationTypesEnum = "DUPLICATE_LOCATION"
	NotificationSettingNotificationTypesEnumLossOfVoiceOfMerchant       NotificationSettingNotificationTypesEnum = "LOSS_OF_VOICE_OF_MERCHANT"
	NotificationSettingNotificationTypesEnumVoiceOfMerchantUpdated      NotificationSettingNotificationTypesEnum = "VOICE_OF_MERCHANT_UPDATED"
)

type NotificationSetting struct {
	Name              *string                                    `json:"name"`
	NotificationTypes []NotificationSettingNotificationTypesEnum `json:"notificationTypes"`
	PubsubTopic       *string                                    `json:"pubsubTopic"`
}
