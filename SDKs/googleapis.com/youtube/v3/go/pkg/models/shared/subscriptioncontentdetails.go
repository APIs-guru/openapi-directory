package shared

type SubscriptionContentDetailsActivityTypeEnum string

const (
	SubscriptionContentDetailsActivityTypeEnumSubscriptionActivityTypeUnspecified SubscriptionContentDetailsActivityTypeEnum = "subscriptionActivityTypeUnspecified"
	SubscriptionContentDetailsActivityTypeEnumAll                                 SubscriptionContentDetailsActivityTypeEnum = "all"
	SubscriptionContentDetailsActivityTypeEnumUploads                             SubscriptionContentDetailsActivityTypeEnum = "uploads"
)

type SubscriptionContentDetails struct {
	ActivityType   *SubscriptionContentDetailsActivityTypeEnum `json:"activityType"`
	NewItemCount   *int64                                      `json:"newItemCount"`
	TotalItemCount *int64                                      `json:"totalItemCount"`
}
