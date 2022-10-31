package shared

type ReportStatusFormatEnum string

const (
	ReportStatusFormatEnumFormatUnspecified ReportStatusFormatEnum = "FORMAT_UNSPECIFIED"
	ReportStatusFormatEnumCsv               ReportStatusFormatEnum = "CSV"
	ReportStatusFormatEnumXlsx              ReportStatusFormatEnum = "XLSX"
)

type ReportStatusStateEnum string

const (
	ReportStatusStateEnumStateUnspecified ReportStatusStateEnum = "STATE_UNSPECIFIED"
	ReportStatusStateEnumQueued           ReportStatusStateEnum = "QUEUED"
	ReportStatusStateEnumRunning          ReportStatusStateEnum = "RUNNING"
	ReportStatusStateEnumDone             ReportStatusStateEnum = "DONE"
	ReportStatusStateEnumFailed           ReportStatusStateEnum = "FAILED"
)

type ReportStatus struct {
	FinishTime *string                 `json:"finishTime,omitempty"`
	Format     *ReportStatusFormatEnum `json:"format,omitempty"`
	State      *ReportStatusStateEnum  `json:"state,omitempty"`
}
