package shared

type OptimalParameterResponse struct {
	Hyperparameters *ForecastHyperparameterResponse       `json:"hyperparameters"`
	TimeSeries      []TimeSeriesOptimalParametersResponse `json:"timeSeries"`
}
