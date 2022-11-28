package shared

// Attributes
// A set of attributes, each in the format `[KEY]:[VALUE]`.
type Attributes struct {
	AttributeMap           map[string]AttributeValue `json:"attributeMap,omitempty"`
	DroppedAttributesCount *int32                    `json:"droppedAttributesCount,omitempty"`
}
