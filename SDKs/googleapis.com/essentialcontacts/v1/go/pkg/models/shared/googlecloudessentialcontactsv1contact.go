package shared

type GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum string

const (
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumNotificationCategoryUnspecified GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "NOTIFICATION_CATEGORY_UNSPECIFIED"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumAll                             GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "ALL"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumSuspension                      GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "SUSPENSION"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumSecurity                        GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "SECURITY"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumTechnical                       GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "TECHNICAL"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumBilling                         GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "BILLING"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumLegal                           GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "LEGAL"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumProductUpdates                  GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "PRODUCT_UPDATES"
	GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnumTechnicalIncidents              GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = "TECHNICAL_INCIDENTS"
)

type GoogleCloudEssentialcontactsV1ContactValidationStateEnum string

const (
	GoogleCloudEssentialcontactsV1ContactValidationStateEnumValidationStateUnspecified GoogleCloudEssentialcontactsV1ContactValidationStateEnum = "VALIDATION_STATE_UNSPECIFIED"
	GoogleCloudEssentialcontactsV1ContactValidationStateEnumValid                      GoogleCloudEssentialcontactsV1ContactValidationStateEnum = "VALID"
	GoogleCloudEssentialcontactsV1ContactValidationStateEnumInvalid                    GoogleCloudEssentialcontactsV1ContactValidationStateEnum = "INVALID"
)

type GoogleCloudEssentialcontactsV1Contact struct {
	Email                             *string                                                                      `json:"email"`
	LanguageTag                       *string                                                                      `json:"languageTag"`
	Name                              *string                                                                      `json:"name"`
	NotificationCategorySubscriptions []GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum `json:"notificationCategorySubscriptions"`
	ValidateTime                      *string                                                                      `json:"validateTime"`
	ValidationState                   *GoogleCloudEssentialcontactsV1ContactValidationStateEnum                    `json:"validationState"`
}
