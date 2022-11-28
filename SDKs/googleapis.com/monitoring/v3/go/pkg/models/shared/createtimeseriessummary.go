package shared

// CreateTimeSeriesSummary
// Summary of the result of a failed request to write data to a time series.
type CreateTimeSeriesSummary struct {
	Errors            []Error `json:"errors,omitempty"`
	SuccessPointCount *int32  `json:"successPointCount,omitempty"`
	TotalPointCount   *int32  `json:"totalPointCount,omitempty"`
}
