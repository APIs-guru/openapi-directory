package shared

type ReturnPolicySeasonalOverride struct {
	EndDate   *string             `json:"endDate"`
	Name      *string             `json:"name"`
	Policy    *ReturnPolicyPolicy `json:"policy"`
	StartDate *string             `json:"startDate"`
}
