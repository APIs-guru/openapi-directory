package shared

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnumLineItemRecurrenceTypeUnspecified GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnumLineItemRecurrenceTypePeriodic    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnumLineItemRecurrenceTypeOneTime     GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
)

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateUnspecified  GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateActive       GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_ACTIVE"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateInactive     GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_INACTIVE"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateNew          GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_NEW"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateActivating   GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_ACTIVATING"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnumLineItemStateDeactivating GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = "LINE_ITEM_STATE_DEACTIVATING"
)

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem struct {
	Description              *string                                                                                `json:"description,omitempty"`
	LineItemFreeTrialEndTime *string                                                                                `json:"lineItemFreeTrialEndTime,omitempty"`
	LineItemPromotionSpecs   []GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec                   `json:"lineItemPromotionSpecs,omitempty"`
	OneTimeRecurrenceDetails *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails `json:"oneTimeRecurrenceDetails,omitempty"`
	Product                  *string                                                                                `json:"product,omitempty"`
	RecurrenceType           *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum       `json:"recurrenceType,omitempty"`
	State                    *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum                `json:"state,omitempty"`
}
