package shared

type OutliersRequest struct {
	Data            []PlanningLevelDataDto `json:"data"`
	PlanningLevelID string                 `json:"planningLevelId"`
	StartDate       string                 `json:"startDate"`
}
