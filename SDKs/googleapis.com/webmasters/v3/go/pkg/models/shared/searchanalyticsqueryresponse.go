package shared

// SearchAnalyticsQueryResponse
// A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
type SearchAnalyticsQueryResponse struct {
	ResponseAggregationType *string      `json:"responseAggregationType,omitempty"`
	Rows                    []APIDataRow `json:"rows,omitempty"`
}
