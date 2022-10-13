package shared

type EnterpriseCrmEventbusProtoExecutionTraceInfo struct {
	ParentEventExecutionInfoID *string `json:"parentEventExecutionInfoId"`
	TraceID                    *string `json:"traceId"`
}
