package shared

type TimeSeriesForecastResponse struct {
	Error        *float64                          `json:"error"`
	ForecastData []PlanningLevelForecastResultData `json:"forecastData"`
	Method       *string                           `json:"method"`
	TimeSeriesID *string                           `json:"timeSeriesId"`
}
