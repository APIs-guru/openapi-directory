package shared

type Proto2DescriptorProto struct {
	EnumType   []Proto2EnumDescriptorProto  `json:"enumType"`
	Field      []Proto2FieldDescriptorProto `json:"field"`
	Name       *string                      `json:"name"`
	NestedType []Proto2DescriptorProto      `json:"nestedType"`
	OneofDecl  []Proto2OneofDescriptorProto `json:"oneofDecl"`
}
