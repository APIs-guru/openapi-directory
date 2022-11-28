package shared

type SQLOutOfDiskReportSQLOutOfDiskStateEnum string

const (
	SQLOutOfDiskReportSQLOutOfDiskStateEnumSQLOutOfDiskStateUnspecified SQLOutOfDiskReportSQLOutOfDiskStateEnum = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
	SQLOutOfDiskReportSQLOutOfDiskStateEnumNormal                       SQLOutOfDiskReportSQLOutOfDiskStateEnum = "NORMAL"
	SQLOutOfDiskReportSQLOutOfDiskStateEnumSoftShutdown                 SQLOutOfDiskReportSQLOutOfDiskStateEnum = "SOFT_SHUTDOWN"
)

// SQLOutOfDiskReport
// This message wraps up the information written by out-of-disk detection job.
type SQLOutOfDiskReport struct {
	SQLMinRecommendedIncreaseSizeGb *int32                                   `json:"sqlMinRecommendedIncreaseSizeGb,omitempty"`
	SQLOutOfDiskState               *SQLOutOfDiskReportSQLOutOfDiskStateEnum `json:"sqlOutOfDiskState,omitempty"`
}
