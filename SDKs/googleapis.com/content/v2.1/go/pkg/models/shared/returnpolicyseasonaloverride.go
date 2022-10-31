package shared



type ReturnPolicySeasonalOverride struct {
    EndDate *string `json:"endDate,omitempty"`
    Name *string `json:"name,omitempty"`
    Policy *ReturnPolicyPolicy `json:"policy,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}

