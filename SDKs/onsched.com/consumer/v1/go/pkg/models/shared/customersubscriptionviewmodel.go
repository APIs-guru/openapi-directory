package shared

import (
"time")

type CustomerSubscriptionViewModel struct {
    CustomerID *string `json:"customerId,omitempty"`
    CustomerPlanID *string `json:"customerPlanId,omitempty"`
    CustomerPlanName *string `json:"customerPlanName,omitempty"`
    ID *string `json:"id,omitempty"`
    ObjectName *string `json:"objectName,omitempty"`
    PlanStart *time.Time `json:"planStart,omitempty"`
    TrialPeriodEnd *time.Time `json:"trialPeriodEnd,omitempty"`
    TrialPeriodStart *time.Time `json:"trialPeriodStart,omitempty"`
    
}

