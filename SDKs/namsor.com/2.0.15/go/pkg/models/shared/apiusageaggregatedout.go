package shared



type APIUsageAggregatedOut struct {
    ColHeaders []string `json:"colHeaders,omitempty"`
    Data [][]int32 `json:"data,omitempty"`
    HistoryTruncated *bool `json:"historyTruncated,omitempty"`
    PeriodEnd *int64 `json:"periodEnd,omitempty"`
    PeriodStart *int64 `json:"periodStart,omitempty"`
    RowHeaders []string `json:"rowHeaders,omitempty"`
    TimeUnit *string `json:"timeUnit,omitempty"`
    TotalUsage *int64 `json:"totalUsage,omitempty"`
    
}

