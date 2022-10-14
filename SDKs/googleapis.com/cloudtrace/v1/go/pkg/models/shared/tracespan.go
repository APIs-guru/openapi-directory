package shared

type TraceSpanKindEnum string

const (
	TraceSpanKindEnumSpanKindUnspecified TraceSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
	TraceSpanKindEnumRPCServer           TraceSpanKindEnum = "RPC_SERVER"
	TraceSpanKindEnumRPCClient           TraceSpanKindEnum = "RPC_CLIENT"
)

type TraceSpan struct {
	EndTime      *string            `json:"endTime,omitempty"`
	Kind         *TraceSpanKindEnum `json:"kind,omitempty"`
	Labels       map[string]string  `json:"labels,omitempty"`
	Name         *string            `json:"name,omitempty"`
	ParentSpanID *string            `json:"parentSpanId,omitempty"`
	SpanID       *string            `json:"spanId,omitempty"`
	StartTime    *string            `json:"startTime,omitempty"`
}
