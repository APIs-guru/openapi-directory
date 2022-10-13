package shared

import (
	"time"
)

type CustomerSubscriptionViewModel struct {
	CustomerID       *string    `json:"customerId"`
	CustomerPlanID   *string    `json:"customerPlanId"`
	CustomerPlanName *string    `json:"customerPlanName"`
	ID               *string    `json:"id"`
	ObjectName       *string    `json:"objectName"`
	PlanStart        *time.Time `json:"planStart"`
	TrialPeriodEnd   *time.Time `json:"trialPeriodEnd"`
	TrialPeriodStart *time.Time `json:"trialPeriodStart"`
}
