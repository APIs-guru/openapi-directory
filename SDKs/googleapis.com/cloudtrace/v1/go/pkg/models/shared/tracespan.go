package shared

type TraceSpanKindEnum string

const (
	TraceSpanKindEnumSpanKindUnspecified TraceSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
	TraceSpanKindEnumRPCServer           TraceSpanKindEnum = "RPC_SERVER"
	TraceSpanKindEnumRPCClient           TraceSpanKindEnum = "RPC_CLIENT"
)

// TraceSpan
// A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
type TraceSpan struct {
	EndTime      *string            `json:"endTime,omitempty"`
	Kind         *TraceSpanKindEnum `json:"kind,omitempty"`
	Labels       map[string]string  `json:"labels,omitempty"`
	Name         *string            `json:"name,omitempty"`
	ParentSpanID *string            `json:"parentSpanId,omitempty"`
	SpanID       *string            `json:"spanId,omitempty"`
	StartTime    *string            `json:"startTime,omitempty"`
}
