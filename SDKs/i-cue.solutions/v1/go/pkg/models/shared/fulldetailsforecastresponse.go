package shared



type FullDetailsForecastResponse struct {
    Hyperparameters *ForecastHyperparameterResponse `json:"hyperparameters,omitempty"`
    TimeSeries []TimeSeriesFullDetailsResponse `json:"timeSeries,omitempty"`
    
}

