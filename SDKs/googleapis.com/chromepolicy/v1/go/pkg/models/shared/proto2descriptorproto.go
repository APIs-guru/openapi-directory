package shared



type Proto2DescriptorProto struct {
    EnumType []Proto2EnumDescriptorProto `json:"enumType,omitempty"`
    Field []Proto2FieldDescriptorProto `json:"field,omitempty"`
    Name *string `json:"name,omitempty"`
    NestedType []Proto2DescriptorProto `json:"nestedType,omitempty"`
    OneofDecl []Proto2OneofDescriptorProto `json:"oneofDecl,omitempty"`
    
}

