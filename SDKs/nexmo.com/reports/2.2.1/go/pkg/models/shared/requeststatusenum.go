package shared

type RequestStatusEnum string

const (
	RequestStatusEnumPending    RequestStatusEnum = "PENDING"
	RequestStatusEnumProcessing RequestStatusEnum = "PROCESSING"
	RequestStatusEnumSuccess    RequestStatusEnum = "SUCCESS"
	RequestStatusEnumAborted    RequestStatusEnum = "ABORTED"
	RequestStatusEnumFailed     RequestStatusEnum = "FAILED"
	RequestStatusEnumTruncated  RequestStatusEnum = "TRUNCATED"
)
