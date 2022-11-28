package shared

type ReportFiles struct {
	ByteCount *string `json:"byteCount,omitempty"`
	URL       *string `json:"url,omitempty"`
}

// Report
// A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
type Report struct {
	Files                  []ReportFiles            `json:"files,omitempty"`
	ID                     *string                  `json:"id,omitempty"`
	IsReportReady          *bool                    `json:"isReportReady,omitempty"`
	Kind                   *string                  `json:"kind,omitempty"`
	Request                *ReportRequest           `json:"request,omitempty"`
	RowCount               *int32                   `json:"rowCount,omitempty"`
	Rows                   []map[string]interface{} `json:"rows,omitempty"`
	StatisticsCurrencyCode *string                  `json:"statisticsCurrencyCode,omitempty"`
	StatisticsTimeZone     *string                  `json:"statisticsTimeZone,omitempty"`
}
