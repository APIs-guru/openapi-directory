package shared

type TimeSeriesForecastResponse struct {
	Error        *float64                          `json:"error,omitempty"`
	ForecastData []PlanningLevelForecastResultData `json:"forecastData,omitempty"`
	Method       *string                           `json:"method,omitempty"`
	TimeSeriesID *string                           `json:"timeSeriesId,omitempty"`
}
