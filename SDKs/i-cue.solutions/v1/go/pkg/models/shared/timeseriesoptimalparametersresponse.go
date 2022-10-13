package shared

type TimeSeriesOptimalParametersResponse struct {
	Method            *string                            `json:"method"`
	OptimalParameters *ForecastOptimalParametersResponse `json:"optimalParameters"`
	TimeSeriesID      *string                            `json:"timeSeriesId"`
}
