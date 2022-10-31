package shared

type PlanningLevelDataDto struct {
	HistoryValues []float64 `json:"historyValues,omitempty"`
	TimeSeriesID  *string   `json:"timeSeriesId,omitempty"`
}
