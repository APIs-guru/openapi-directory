package shared




type NotificationsNotificationTypesEnum string

const (
    NotificationsNotificationTypesEnumNotificationTypeUnspecified NotificationsNotificationTypesEnum = "NOTIFICATION_TYPE_UNSPECIFIED"
NotificationsNotificationTypesEnumGoogleUpdate NotificationsNotificationTypesEnum = "GOOGLE_UPDATE"
NotificationsNotificationTypesEnumNewReview NotificationsNotificationTypesEnum = "NEW_REVIEW"
NotificationsNotificationTypesEnumUpdatedReview NotificationsNotificationTypesEnum = "UPDATED_REVIEW"
NotificationsNotificationTypesEnumNewCustomerMedia NotificationsNotificationTypesEnum = "NEW_CUSTOMER_MEDIA"
NotificationsNotificationTypesEnumNewQuestion NotificationsNotificationTypesEnum = "NEW_QUESTION"
NotificationsNotificationTypesEnumUpdatedQuestion NotificationsNotificationTypesEnum = "UPDATED_QUESTION"
NotificationsNotificationTypesEnumNewAnswer NotificationsNotificationTypesEnum = "NEW_ANSWER"
NotificationsNotificationTypesEnumUpdatedAnswer NotificationsNotificationTypesEnum = "UPDATED_ANSWER"
NotificationsNotificationTypesEnumUpdatedLocationState NotificationsNotificationTypesEnum = "UPDATED_LOCATION_STATE"
)


type Notifications struct {
    Name *string `json:"name,omitempty"`
    NotificationTypes []NotificationsNotificationTypesEnum `json:"notificationTypes,omitempty"`
    TopicName *string `json:"topicName,omitempty"`
    
}

