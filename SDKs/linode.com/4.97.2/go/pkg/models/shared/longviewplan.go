package shared

type LongviewPlanLongviewSubscriptionEnum string

const (
	LongviewPlanLongviewSubscriptionEnumLongview3   LongviewPlanLongviewSubscriptionEnum = "longview-3"
	LongviewPlanLongviewSubscriptionEnumLongview10  LongviewPlanLongviewSubscriptionEnum = "longview-10"
	LongviewPlanLongviewSubscriptionEnumLongview40  LongviewPlanLongviewSubscriptionEnum = "longview-40"
	LongviewPlanLongviewSubscriptionEnumLongview100 LongviewPlanLongviewSubscriptionEnum = "longview-100"
)

// LongviewPlan
// Longview Plan object.
type LongviewPlan struct {
	LongviewSubscription *LongviewPlanLongviewSubscriptionEnum `json:"longview_subscription,omitempty"`
}
