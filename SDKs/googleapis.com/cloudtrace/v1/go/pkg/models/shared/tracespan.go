package shared

type TraceSpanKindEnum string

const (
	TraceSpanKindEnumSpanKindUnspecified TraceSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
	TraceSpanKindEnumRPCServer           TraceSpanKindEnum = "RPC_SERVER"
	TraceSpanKindEnumRPCClient           TraceSpanKindEnum = "RPC_CLIENT"
)

type TraceSpan struct {
	EndTime      *string            `json:"endTime"`
	Kind         *TraceSpanKindEnum `json:"kind"`
	Labels       map[string]string  `json:"labels"`
	Name         *string            `json:"name"`
	ParentSpanID *string            `json:"parentSpanId"`
	SpanID       *string            `json:"spanId"`
	StartTime    *string            `json:"startTime"`
}
