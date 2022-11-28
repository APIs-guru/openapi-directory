package shared

type TraceSpanSpanKindEnum string

const (
	TraceSpanSpanKindEnumSpanKindUnspecified TraceSpanSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
	TraceSpanSpanKindEnumInternal            TraceSpanSpanKindEnum = "INTERNAL"
	TraceSpanSpanKindEnumServer              TraceSpanSpanKindEnum = "SERVER"
	TraceSpanSpanKindEnumClient              TraceSpanSpanKindEnum = "CLIENT"
	TraceSpanSpanKindEnumProducer            TraceSpanSpanKindEnum = "PRODUCER"
	TraceSpanSpanKindEnumConsumer            TraceSpanSpanKindEnum = "CONSUMER"
)

// TraceSpan
// A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
type TraceSpan struct {
	Attributes              *Attributes            `json:"attributes,omitempty"`
	ChildSpanCount          *int32                 `json:"childSpanCount,omitempty"`
	DisplayName             *TruncatableString     `json:"displayName,omitempty"`
	EndTime                 *string                `json:"endTime,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	ParentSpanID            *string                `json:"parentSpanId,omitempty"`
	SameProcessAsParentSpan *bool                  `json:"sameProcessAsParentSpan,omitempty"`
	SpanID                  *string                `json:"spanId,omitempty"`
	SpanKind                *TraceSpanSpanKindEnum `json:"spanKind,omitempty"`
	StartTime               *string                `json:"startTime,omitempty"`
	Status                  *Status                `json:"status,omitempty"`
}
