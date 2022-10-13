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

type TraceSpan struct {
	Attributes              *Attributes            `json:"attributes"`
	ChildSpanCount          *int32                 `json:"childSpanCount"`
	DisplayName             *TruncatableString     `json:"displayName"`
	EndTime                 *string                `json:"endTime"`
	Name                    *string                `json:"name"`
	ParentSpanID            *string                `json:"parentSpanId"`
	SameProcessAsParentSpan *bool                  `json:"sameProcessAsParentSpan"`
	SpanID                  *string                `json:"spanId"`
	SpanKind                *TraceSpanSpanKindEnum `json:"spanKind"`
	StartTime               *string                `json:"startTime"`
	Status                  *Status                `json:"status"`
}
