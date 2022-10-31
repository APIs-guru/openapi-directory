package shared



type Attributes struct {
    AttributeMap map[string]AttributeValue `json:"attributeMap,omitempty"`
    DroppedAttributesCount *int32 `json:"droppedAttributesCount,omitempty"`
    
}

