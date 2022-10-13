package shared

type Trace struct {
	ProjectID *string     `json:"projectId"`
	Spans     []TraceSpan `json:"spans"`
	TraceID   *string     `json:"traceId"`
}
