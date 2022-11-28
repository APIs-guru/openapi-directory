package shared

type SubscriptionContentDetailsActivityTypeEnum string

const (
	SubscriptionContentDetailsActivityTypeEnumSubscriptionActivityTypeUnspecified SubscriptionContentDetailsActivityTypeEnum = "subscriptionActivityTypeUnspecified"
	SubscriptionContentDetailsActivityTypeEnumAll                                 SubscriptionContentDetailsActivityTypeEnum = "all"
	SubscriptionContentDetailsActivityTypeEnumUploads                             SubscriptionContentDetailsActivityTypeEnum = "uploads"
)

// SubscriptionContentDetails
// Details about the content to witch a subscription refers.
type SubscriptionContentDetails struct {
	ActivityType   *SubscriptionContentDetailsActivityTypeEnum `json:"activityType,omitempty"`
	NewItemCount   *int64                                      `json:"newItemCount,omitempty"`
	TotalItemCount *int64                                      `json:"totalItemCount,omitempty"`
}
