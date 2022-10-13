package shared

type RewindResponse struct {
	Hyperparameters *RewindHyperparameterResponse `json:"hyperparameters"`
	TimeSeries      []RewindTimeSeriesResponse    `json:"timeSeries"`
	TotalCost       *float64                      `json:"totalCost"`
}
