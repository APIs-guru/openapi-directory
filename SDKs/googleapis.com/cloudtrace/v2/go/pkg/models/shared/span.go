package shared

type SpanSpanKindEnum string

const (
	SpanSpanKindEnumSpanKindUnspecified SpanSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
	SpanSpanKindEnumInternal            SpanSpanKindEnum = "INTERNAL"
	SpanSpanKindEnumServer              SpanSpanKindEnum = "SERVER"
	SpanSpanKindEnumClient              SpanSpanKindEnum = "CLIENT"
	SpanSpanKindEnumProducer            SpanSpanKindEnum = "PRODUCER"
	SpanSpanKindEnumConsumer            SpanSpanKindEnum = "CONSUMER"
)

// Span
// A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
type Span struct {
	Attributes              *Attributes        `json:"attributes,omitempty"`
	ChildSpanCount          *int32             `json:"childSpanCount,omitempty"`
	DisplayName             *TruncatableString `json:"displayName,omitempty"`
	EndTime                 *string            `json:"endTime,omitempty"`
	Links                   *Links             `json:"links,omitempty"`
	Name                    *string            `json:"name,omitempty"`
	ParentSpanID            *string            `json:"parentSpanId,omitempty"`
	SameProcessAsParentSpan *bool              `json:"sameProcessAsParentSpan,omitempty"`
	SpanID                  *string            `json:"spanId,omitempty"`
	SpanKind                *SpanSpanKindEnum  `json:"spanKind,omitempty"`
	StackTrace              *StackTrace        `json:"stackTrace,omitempty"`
	StartTime               *string            `json:"startTime,omitempty"`
	Status                  *Status            `json:"status,omitempty"`
	TimeEvents              *TimeEvents        `json:"timeEvents,omitempty"`
}
