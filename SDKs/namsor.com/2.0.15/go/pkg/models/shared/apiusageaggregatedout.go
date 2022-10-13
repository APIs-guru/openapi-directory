package shared

type APIUsageAggregatedOut struct {
	ColHeaders       []string  `json:"colHeaders"`
	Data             [][]int32 `json:"data"`
	HistoryTruncated *bool     `json:"historyTruncated"`
	PeriodEnd        *int64    `json:"periodEnd"`
	PeriodStart      *int64    `json:"periodStart"`
	RowHeaders       []string  `json:"rowHeaders"`
	TimeUnit         *string   `json:"timeUnit"`
	TotalUsage       *int64    `json:"totalUsage"`
}
