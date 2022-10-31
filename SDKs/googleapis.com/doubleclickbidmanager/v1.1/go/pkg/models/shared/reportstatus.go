package shared

type ReportStatusFormatEnum string

const (
	ReportStatusFormatEnumCsv      ReportStatusFormatEnum = "CSV"
	ReportStatusFormatEnumExcelCsv ReportStatusFormatEnum = "EXCEL_CSV"
	ReportStatusFormatEnumXlsx     ReportStatusFormatEnum = "XLSX"
)

type ReportStatusStateEnum string

const (
	ReportStatusStateEnumRunning ReportStatusStateEnum = "RUNNING"
	ReportStatusStateEnumDone    ReportStatusStateEnum = "DONE"
	ReportStatusStateEnumFailed  ReportStatusStateEnum = "FAILED"
)

type ReportStatus struct {
	Failure      *ReportFailure          `json:"failure,omitempty"`
	FinishTimeMs *string                 `json:"finishTimeMs,omitempty"`
	Format       *ReportStatusFormatEnum `json:"format,omitempty"`
	State        *ReportStatusStateEnum  `json:"state,omitempty"`
}
