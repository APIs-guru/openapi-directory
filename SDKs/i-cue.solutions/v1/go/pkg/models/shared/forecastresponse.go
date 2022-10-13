package shared

type ForecastResponse struct {
	Hyperparameters *ForecastHyperparameterResponse `json:"hyperparameters"`
	TimeSeries      []TimeSeriesForecastResponse    `json:"timeSeries"`
}
