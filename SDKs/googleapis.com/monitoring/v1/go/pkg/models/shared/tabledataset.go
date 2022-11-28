package shared

// TableDataSet
// Groups a time series query definition with table options.
type TableDataSet struct {
	MinAlignmentPeriod  *string              `json:"minAlignmentPeriod,omitempty"`
	TableDisplayOptions *TableDisplayOptions `json:"tableDisplayOptions,omitempty"`
	TableTemplate       *string              `json:"tableTemplate,omitempty"`
	TimeSeriesQuery     *TimeSeriesQuery     `json:"timeSeriesQuery,omitempty"`
}
