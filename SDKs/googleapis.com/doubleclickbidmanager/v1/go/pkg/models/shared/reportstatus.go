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
	Failure      *ReportFailure          `json:"failure"`
	FinishTimeMs *string                 `json:"finishTimeMs"`
	Format       *ReportStatusFormatEnum `json:"format"`
	State        *ReportStatusStateEnum  `json:"state"`
}
