package shared

type RewindTimeSeriesResponse struct {
	CustomerError *float64 `json:"customerError"`
	ErrorDiff     *float64 `json:"errorDiff"`
	IcueError     *float64 `json:"icueError"`
	TimeSeries    *string  `json:"timeSeries"`
	TotalCost     *float64 `json:"totalCost"`
	UseIcue       *bool    `json:"useIcue"`
}
