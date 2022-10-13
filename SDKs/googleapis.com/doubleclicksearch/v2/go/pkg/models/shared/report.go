package shared

type ReportFiles struct {
	ByteCount *string `json:"byteCount"`
	URL       *string `json:"url"`
}

type Report struct {
	Files                  []ReportFiles            `json:"files"`
	ID                     *string                  `json:"id"`
	IsReportReady          *bool                    `json:"isReportReady"`
	Kind                   *string                  `json:"kind"`
	Request                *ReportRequest           `json:"request"`
	RowCount               *int32                   `json:"rowCount"`
	Rows                   []map[string]interface{} `json:"rows"`
	StatisticsCurrencyCode *string                  `json:"statisticsCurrencyCode"`
	StatisticsTimeZone     *string                  `json:"statisticsTimeZone"`
}
