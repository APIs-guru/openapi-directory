package shared

type XyChart struct {
	ChartOptions      *ChartOptions `json:"chartOptions"`
	DataSets          []DataSet     `json:"dataSets"`
	Thresholds        []Threshold   `json:"thresholds"`
	TimeshiftDuration *string       `json:"timeshiftDuration"`
	XAxis             *Axis         `json:"xAxis"`
	Y2Axis            *Axis         `json:"y2Axis"`
	YAxis             *Axis         `json:"yAxis"`
}
