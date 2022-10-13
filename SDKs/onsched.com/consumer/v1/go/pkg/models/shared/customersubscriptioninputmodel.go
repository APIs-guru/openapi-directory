package shared

import (
	"time"
)

type CustomerSubscriptionInputModel struct {
	CustomerPlanID *string    `json:"customerPlanId"`
	PlanStart      *time.Time `json:"planStart"`
	TrialPeriodEnd *time.Time `json:"trialPeriodEnd"`
}
