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

type Span struct {
	Attributes              *Attributes        `json:"attributes"`
	ChildSpanCount          *int32             `json:"childSpanCount"`
	DisplayName             *TruncatableString `json:"displayName"`
	EndTime                 *string            `json:"endTime"`
	Links                   *Links             `json:"links"`
	Name                    *string            `json:"name"`
	ParentSpanID            *string            `json:"parentSpanId"`
	SameProcessAsParentSpan *bool              `json:"sameProcessAsParentSpan"`
	SpanID                  *string            `json:"spanId"`
	SpanKind                *SpanSpanKindEnum  `json:"spanKind"`
	StackTrace              *StackTrace        `json:"stackTrace"`
	StartTime               *string            `json:"startTime"`
	Status                  *Status            `json:"status"`
	TimeEvents              *TimeEvents        `json:"timeEvents"`
}
