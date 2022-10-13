package shared

type ForecastBottomUpResponse struct {
	ForecastData    []PlanningLevelForecastResultData `json:"forecastData"`
	Hyperparameters *ForecastHyperparameterResponse   `json:"hyperparameters"`
}
