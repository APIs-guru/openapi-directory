package shared

type TimeSeriesOptimalParametersResponse struct {
	Method            *string                            `json:"method,omitempty"`
	OptimalParameters *ForecastOptimalParametersResponse `json:"optimalParameters,omitempty"`
	TimeSeriesID      *string                            `json:"timeSeriesId,omitempty"`
}
