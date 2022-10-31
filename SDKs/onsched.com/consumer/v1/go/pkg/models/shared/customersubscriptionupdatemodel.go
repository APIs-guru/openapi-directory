package shared

import (
"time")

type CustomerSubscriptionUpdateModel struct {
    CustomerPlanID *string `json:"customerPlanId,omitempty"`
    PlanStart *time.Time `json:"planStart,omitempty"`
    TrialPeriodEnd *time.Time `json:"trialPeriodEnd,omitempty"`
    
}

