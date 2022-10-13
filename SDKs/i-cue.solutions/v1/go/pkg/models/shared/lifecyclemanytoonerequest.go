package shared

type LifecycleManyToOneRequest struct {
	Data            []PlanningLevelDataDto `json:"data"`
	PlanningLevelID string                 `json:"planningLevelId"`
	Ratios          []float64              `json:"ratios"`
}
