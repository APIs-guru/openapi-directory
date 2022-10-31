package shared



type Proto2FileDescriptorProto struct {
    EnumType []Proto2EnumDescriptorProto `json:"enumType,omitempty"`
    MessageType []Proto2DescriptorProto `json:"messageType,omitempty"`
    Name *string `json:"name,omitempty"`
    Package *string `json:"package,omitempty"`
    Syntax *string `json:"syntax,omitempty"`
    
}

