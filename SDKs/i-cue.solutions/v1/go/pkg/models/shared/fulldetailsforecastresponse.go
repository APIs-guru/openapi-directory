package shared

type FullDetailsForecastResponse struct {
	Hyperparameters *ForecastHyperparameterResponse `json:"hyperparameters"`
	TimeSeries      []TimeSeriesFullDetailsResponse `json:"timeSeries"`
}
