package shared




type TraceSpanSpanKindEnum string

const (
    TraceSpanSpanKindEnumSpanKindUnspecified TraceSpanSpanKindEnum = "SPAN_KIND_UNSPECIFIED"
TraceSpanSpanKindEnumInternal TraceSpanSpanKindEnum = "INTERNAL"
TraceSpanSpanKindEnumServer TraceSpanSpanKindEnum = "SERVER"
TraceSpanSpanKindEnumClient TraceSpanSpanKindEnum = "CLIENT"
TraceSpanSpanKindEnumProducer TraceSpanSpanKindEnum = "PRODUCER"
TraceSpanSpanKindEnumConsumer TraceSpanSpanKindEnum = "CONSUMER"
)


type TraceSpan struct {
    Attributes *Attributes `json:"attributes,omitempty"`
    ChildSpanCount *int32 `json:"childSpanCount,omitempty"`
    DisplayName *TruncatableString `json:"displayName,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentSpanID *string `json:"parentSpanId,omitempty"`
    SameProcessAsParentSpan *bool `json:"sameProcessAsParentSpan,omitempty"`
    SpanID *string `json:"spanId,omitempty"`
    SpanKind *TraceSpanSpanKindEnum `json:"spanKind,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *Status `json:"status,omitempty"`
    
}

