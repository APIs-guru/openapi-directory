package shared

type TimeSeriesHistoryAndForecastResponse struct {
	Error        *float64                          `json:"error"`
	ForecastData []PlanningLevelForecastResultData `json:"forecastData"`
	HistoryData  []PlanningLevelForecastResultData `json:"historyData"`
	Method       *string                           `json:"method"`
	TimeSeriesID *string                           `json:"timeSeriesId"`
}
