package shared

type PlanningLevelDataDto struct {
	HistoryValues []float64 `json:"historyValues"`
	TimeSeriesID  *string   `json:"timeSeriesId"`
}
