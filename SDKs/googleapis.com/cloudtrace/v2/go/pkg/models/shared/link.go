package shared

type LinkTypeEnum string

const (
	LinkTypeEnumTypeUnspecified  LinkTypeEnum = "TYPE_UNSPECIFIED"
	LinkTypeEnumChildLinkedSpan  LinkTypeEnum = "CHILD_LINKED_SPAN"
	LinkTypeEnumParentLinkedSpan LinkTypeEnum = "PARENT_LINKED_SPAN"
)

// Link
// A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
type Link struct {
	Attributes *Attributes   `json:"attributes,omitempty"`
	SpanID     *string       `json:"spanId,omitempty"`
	TraceID    *string       `json:"traceId,omitempty"`
	Type       *LinkTypeEnum `json:"type,omitempty"`
}
