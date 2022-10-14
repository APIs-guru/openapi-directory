package shared

type OutliersRequest struct {
	Data            []PlanningLevelDataDto `json:"data,omitempty"`
	PlanningLevelID string                 `json:"planningLevelId"`
	StartDate       string                 `json:"startDate"`
}
