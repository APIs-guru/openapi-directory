package shared

type SearchAnalyticsQueryResponse struct {
	ResponseAggregationType *string      `json:"responseAggregationType"`
	Rows                    []APIDataRow `json:"rows"`
}
