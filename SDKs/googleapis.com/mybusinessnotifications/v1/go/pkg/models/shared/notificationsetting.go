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

// NotificationSetting
// A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
type NotificationSetting struct {
	Name              *string                                    `json:"name,omitempty"`
	NotificationTypes []NotificationSettingNotificationTypesEnum `json:"notificationTypes,omitempty"`
	PubsubTopic       *string                                    `json:"pubsubTopic,omitempty"`
}
