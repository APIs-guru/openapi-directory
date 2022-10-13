package shared

type ForecastPerformanceDataRequest struct {
	ForecastValues []float64 `json:"forecastValues"`
	HistoryValues  []float64 `json:"historyValues"`
	TimeSeriesID   *string   `json:"timeSeriesId"`
}
