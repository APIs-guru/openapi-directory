package shared

type ForecastBottomUpResponse struct {
	ForecastData    []PlanningLevelForecastResultData `json:"forecastData,omitempty"`
	Hyperparameters *ForecastHyperparameterResponse   `json:"hyperparameters,omitempty"`
}
