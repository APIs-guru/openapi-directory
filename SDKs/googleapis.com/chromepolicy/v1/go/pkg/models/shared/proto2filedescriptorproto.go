package shared

type Proto2FileDescriptorProto struct {
	EnumType    []Proto2EnumDescriptorProto `json:"enumType"`
	MessageType []Proto2DescriptorProto     `json:"messageType"`
	Name        *string                     `json:"name"`
	Package     *string                     `json:"package"`
	Syntax      *string                     `json:"syntax"`
}
