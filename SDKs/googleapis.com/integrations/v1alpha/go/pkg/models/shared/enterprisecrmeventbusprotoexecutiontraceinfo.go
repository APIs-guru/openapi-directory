package shared

// EnterpriseCrmEventbusProtoExecutionTraceInfo
// Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
type EnterpriseCrmEventbusProtoExecutionTraceInfo struct {
	ParentEventExecutionInfoID *string `json:"parentEventExecutionInfoId,omitempty"`
	TraceID                    *string `json:"traceId,omitempty"`
}
