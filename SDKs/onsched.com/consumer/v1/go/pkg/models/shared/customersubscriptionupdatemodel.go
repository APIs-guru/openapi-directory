package shared

import (
	"time"
)

type CustomerSubscriptionUpdateModel struct {
	CustomerPlanID *string    `json:"customerPlanId"`
	PlanStart      *time.Time `json:"planStart"`
	TrialPeriodEnd *time.Time `json:"trialPeriodEnd"`
}
