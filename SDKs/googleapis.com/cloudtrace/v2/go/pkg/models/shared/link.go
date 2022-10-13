package shared

type LinkTypeEnum string

const (
	LinkTypeEnumTypeUnspecified  LinkTypeEnum = "TYPE_UNSPECIFIED"
	LinkTypeEnumChildLinkedSpan  LinkTypeEnum = "CHILD_LINKED_SPAN"
	LinkTypeEnumParentLinkedSpan LinkTypeEnum = "PARENT_LINKED_SPAN"
)

type Link struct {
	Attributes *Attributes   `json:"attributes"`
	SpanID     *string       `json:"spanId"`
	TraceID    *string       `json:"traceId"`
	Type       *LinkTypeEnum `json:"type"`
}
