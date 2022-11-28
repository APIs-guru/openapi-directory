package shared

// Proto2EnumDescriptorProto
// Describes an enum type.
type Proto2EnumDescriptorProto struct {
	Name  *string                          `json:"name,omitempty"`
	Value []Proto2EnumValueDescriptorProto `json:"value,omitempty"`
}
