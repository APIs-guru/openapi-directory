package shared



type Trace struct {
    ProjectID *string `json:"projectId,omitempty"`
    Spans []TraceSpan `json:"spans,omitempty"`
    TraceID *string `json:"traceId,omitempty"`
    
}

