package shared

// Trace
// A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
type Trace struct {
	ProjectID *string     `json:"projectId,omitempty"`
	Spans     []TraceSpan `json:"spans,omitempty"`
	TraceID   *string     `json:"traceId,omitempty"`
}
