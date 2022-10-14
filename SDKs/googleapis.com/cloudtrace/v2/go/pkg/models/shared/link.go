package shared

type LinkTypeEnum string

const (
	LinkTypeEnumTypeUnspecified  LinkTypeEnum = "TYPE_UNSPECIFIED"
	LinkTypeEnumChildLinkedSpan  LinkTypeEnum = "CHILD_LINKED_SPAN"
	LinkTypeEnumParentLinkedSpan LinkTypeEnum = "PARENT_LINKED_SPAN"
)

type Link struct {
	Attributes *Attributes   `json:"attributes,omitempty"`
	SpanID     *string       `json:"spanId,omitempty"`
	TraceID    *string       `json:"traceId,omitempty"`
	Type       *LinkTypeEnum `json:"type,omitempty"`
}
