package shared

type TableDataSet struct {
	MinAlignmentPeriod  *string                `json:"minAlignmentPeriod"`
	TableDisplayOptions map[string]interface{} `json:"tableDisplayOptions"`
	TableTemplate       *string                `json:"tableTemplate"`
	TimeSeriesQuery     *TimeSeriesQuery       `json:"timeSeriesQuery"`
}
