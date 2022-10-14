package shared

type PortfolioRequest struct {
	Data            []PlanningLevelDataDto `json:"data,omitempty"`
	PlanningLevelID string                 `json:"planningLevelId"`
	StartDate       string                 `json:"startDate"`
}
