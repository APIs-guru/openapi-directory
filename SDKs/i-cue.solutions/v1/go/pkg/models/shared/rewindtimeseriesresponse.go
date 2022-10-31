package shared

type RewindTimeSeriesResponse struct {
	CustomerError *float64 `json:"customerError,omitempty"`
	ErrorDiff     *float64 `json:"errorDiff,omitempty"`
	IcueError     *float64 `json:"icueError,omitempty"`
	TimeSeries    *string  `json:"timeSeries,omitempty"`
	TotalCost     *float64 `json:"totalCost,omitempty"`
	UseIcue       *bool    `json:"useIcue,omitempty"`
}
