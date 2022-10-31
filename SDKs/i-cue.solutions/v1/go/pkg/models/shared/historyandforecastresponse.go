package shared

type HistoryAndForecastResponse struct {
	Hyperparameters *ForecastHyperparameterResponse        `json:"hyperparameters,omitempty"`
	TimeSeries      []TimeSeriesHistoryAndForecastResponse `json:"timeSeries,omitempty"`
}
