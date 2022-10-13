package shared

type Attributes struct {
	AttributeMap           map[string]AttributeValue `json:"attributeMap"`
	DroppedAttributesCount *int32                    `json:"droppedAttributesCount"`
}
