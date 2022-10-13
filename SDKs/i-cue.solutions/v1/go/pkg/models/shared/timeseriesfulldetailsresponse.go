package shared

type TimeSeriesFullDetailsResponse struct {
	Error             *float64                           `json:"error"`
	ForecastData      []PlanningLevelForecastResultData  `json:"forecastData"`
	HistoryData       []PlanningLevelForecastResultData  `json:"historyData"`
	Method            *string                            `json:"method"`
	OptimalParameters *ForecastOptimalParametersResponse `json:"optimalParameters"`
	Outliers          []OutlierResponse                  `json:"outliers"`
	TimeSeriesID      *string                            `json:"timeSeriesId"`
}
