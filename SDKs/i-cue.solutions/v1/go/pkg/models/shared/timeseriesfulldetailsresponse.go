package shared

type TimeSeriesFullDetailsResponse struct {
	Error             *float64                           `json:"error,omitempty"`
	ForecastData      []PlanningLevelForecastResultData  `json:"forecastData,omitempty"`
	HistoryData       []PlanningLevelForecastResultData  `json:"historyData,omitempty"`
	Method            *string                            `json:"method,omitempty"`
	OptimalParameters *ForecastOptimalParametersResponse `json:"optimalParameters,omitempty"`
	Outliers          []OutlierResponse                  `json:"outliers,omitempty"`
	TimeSeriesID      *string                            `json:"timeSeriesId,omitempty"`
}
