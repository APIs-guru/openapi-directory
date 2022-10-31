package shared



type LifecycleManyToOneRequest struct {
    Data []PlanningLevelDataDto `json:"data,omitempty"`
    PlanningLevelID string `json:"planningLevelId"`
    Ratios []float64 `json:"ratios,omitempty"`
    
}

