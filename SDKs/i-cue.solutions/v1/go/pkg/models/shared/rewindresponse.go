package shared

type RewindResponse struct {
	Hyperparameters *RewindHyperparameterResponse `json:"hyperparameters,omitempty"`
	TimeSeries      []RewindTimeSeriesResponse    `json:"timeSeries,omitempty"`
	TotalCost       *float64                      `json:"totalCost,omitempty"`
}
