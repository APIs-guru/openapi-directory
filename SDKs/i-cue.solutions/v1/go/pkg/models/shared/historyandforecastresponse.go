package shared

type HistoryAndForecastResponse struct {
	Hyperparameters *ForecastHyperparameterResponse        `json:"hyperparameters"`
	TimeSeries      []TimeSeriesHistoryAndForecastResponse `json:"timeSeries"`
}
