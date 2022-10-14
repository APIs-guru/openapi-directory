package shared

type TableDataSet struct {
	MinAlignmentPeriod  *string                `json:"minAlignmentPeriod,omitempty"`
	TableDisplayOptions map[string]interface{} `json:"tableDisplayOptions,omitempty"`
	TableTemplate       *string                `json:"tableTemplate,omitempty"`
	TimeSeriesQuery     *TimeSeriesQuery       `json:"timeSeriesQuery,omitempty"`
}
