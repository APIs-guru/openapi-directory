package shared

type SQLOutOfDiskReportSQLOutOfDiskStateEnum string

const (
	SQLOutOfDiskReportSQLOutOfDiskStateEnumSQLOutOfDiskStateUnspecified SQLOutOfDiskReportSQLOutOfDiskStateEnum = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
	SQLOutOfDiskReportSQLOutOfDiskStateEnumNormal                       SQLOutOfDiskReportSQLOutOfDiskStateEnum = "NORMAL"
	SQLOutOfDiskReportSQLOutOfDiskStateEnumSoftShutdown                 SQLOutOfDiskReportSQLOutOfDiskStateEnum = "SOFT_SHUTDOWN"
)

type SQLOutOfDiskReport struct {
	SQLMinRecommendedIncreaseSizeGb *int32                                   `json:"sqlMinRecommendedIncreaseSizeGb"`
	SQLOutOfDiskState               *SQLOutOfDiskReportSQLOutOfDiskStateEnum `json:"sqlOutOfDiskState"`
}
