package shared



type ForecastPerformanceDataRequest struct {
    ForecastValues []float64 `json:"forecastValues,omitempty"`
    HistoryValues []float64 `json:"historyValues,omitempty"`
    TimeSeriesID *string `json:"timeSeriesId,omitempty"`
    
}

