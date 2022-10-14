package shared

type TimeSeriesHistoryAndForecastResponse struct {
	Error        *float64                          `json:"error,omitempty"`
	ForecastData []PlanningLevelForecastResultData `json:"forecastData,omitempty"`
	HistoryData  []PlanningLevelForecastResultData `json:"historyData,omitempty"`
	Method       *string                           `json:"method,omitempty"`
	TimeSeriesID *string                           `json:"timeSeriesId,omitempty"`
}
