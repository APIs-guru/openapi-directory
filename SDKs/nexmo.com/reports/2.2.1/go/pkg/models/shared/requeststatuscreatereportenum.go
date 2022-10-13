package shared

type RequestStatusCreateReportEnum string

const (
	RequestStatusCreateReportEnumPending    RequestStatusCreateReportEnum = "PENDING"
	RequestStatusCreateReportEnumProcessing RequestStatusCreateReportEnum = "PROCESSING"
	RequestStatusCreateReportEnumSuccess    RequestStatusCreateReportEnum = "SUCCESS"
	RequestStatusCreateReportEnumAborted    RequestStatusCreateReportEnum = "ABORTED"
	RequestStatusCreateReportEnumFailed     RequestStatusCreateReportEnum = "FAILED"
	RequestStatusCreateReportEnumTruncated  RequestStatusCreateReportEnum = "TRUNCATED"
)
