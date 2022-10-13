package shared

type LifecycleOneToOneRequest struct {
	Data            *PlanningLevelDataDto `json:"data"`
	PlanningLevelID string                `json:"planningLevelId"`
	Ratio           *float64              `json:"ratio"`
}
