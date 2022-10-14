package shared

type OptimalParameterResponse struct {
	Hyperparameters *ForecastHyperparameterResponse       `json:"hyperparameters,omitempty"`
	TimeSeries      []TimeSeriesOptimalParametersResponse `json:"timeSeries,omitempty"`
}
