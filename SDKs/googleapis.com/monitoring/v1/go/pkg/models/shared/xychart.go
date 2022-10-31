package shared



type XyChart struct {
    ChartOptions *ChartOptions `json:"chartOptions,omitempty"`
    DataSets []DataSet `json:"dataSets,omitempty"`
    Thresholds []Threshold `json:"thresholds,omitempty"`
    TimeshiftDuration *string `json:"timeshiftDuration,omitempty"`
    XAxis *Axis `json:"xAxis,omitempty"`
    Y2Axis *Axis `json:"y2Axis,omitempty"`
    YAxis *Axis `json:"yAxis,omitempty"`
    
}

