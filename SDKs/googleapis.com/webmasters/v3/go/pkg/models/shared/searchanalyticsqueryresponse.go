package shared



type SearchAnalyticsQueryResponse struct {
    ResponseAggregationType *string `json:"responseAggregationType,omitempty"`
    Rows []APIDataRow `json:"rows,omitempty"`
    
}

