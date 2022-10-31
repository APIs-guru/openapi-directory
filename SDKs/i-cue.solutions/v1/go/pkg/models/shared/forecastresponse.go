package shared



type ForecastResponse struct {
    Hyperparameters *ForecastHyperparameterResponse `json:"hyperparameters,omitempty"`
    TimeSeries []TimeSeriesForecastResponse `json:"timeSeries,omitempty"`
    
}

