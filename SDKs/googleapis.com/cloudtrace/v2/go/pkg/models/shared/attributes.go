package shared

// Attributes
// A set of attributes as key-value pairs.
type Attributes struct {
	AttributeMap           map[string]AttributeValue `json:"attributeMap,omitempty"`
	DroppedAttributesCount *int32                    `json:"droppedAttributesCount,omitempty"`
}
