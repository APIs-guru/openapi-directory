package shared

type Proto2FieldDescriptorProtoLabelEnum string

const (
	Proto2FieldDescriptorProtoLabelEnumLabelOptional Proto2FieldDescriptorProtoLabelEnum = "LABEL_OPTIONAL"
	Proto2FieldDescriptorProtoLabelEnumLabelRequired Proto2FieldDescriptorProtoLabelEnum = "LABEL_REQUIRED"
	Proto2FieldDescriptorProtoLabelEnumLabelRepeated Proto2FieldDescriptorProtoLabelEnum = "LABEL_REPEATED"
)

type Proto2FieldDescriptorProtoTypeEnum string

const (
	Proto2FieldDescriptorProtoTypeEnumTypeDouble   Proto2FieldDescriptorProtoTypeEnum = "TYPE_DOUBLE"
	Proto2FieldDescriptorProtoTypeEnumTypeFloat    Proto2FieldDescriptorProtoTypeEnum = "TYPE_FLOAT"
	Proto2FieldDescriptorProtoTypeEnumTypeInt64    Proto2FieldDescriptorProtoTypeEnum = "TYPE_INT64"
	Proto2FieldDescriptorProtoTypeEnumTypeUint64   Proto2FieldDescriptorProtoTypeEnum = "TYPE_UINT64"
	Proto2FieldDescriptorProtoTypeEnumTypeInt32    Proto2FieldDescriptorProtoTypeEnum = "TYPE_INT32"
	Proto2FieldDescriptorProtoTypeEnumTypeFixed64  Proto2FieldDescriptorProtoTypeEnum = "TYPE_FIXED64"
	Proto2FieldDescriptorProtoTypeEnumTypeFixed32  Proto2FieldDescriptorProtoTypeEnum = "TYPE_FIXED32"
	Proto2FieldDescriptorProtoTypeEnumTypeBool     Proto2FieldDescriptorProtoTypeEnum = "TYPE_BOOL"
	Proto2FieldDescriptorProtoTypeEnumTypeString   Proto2FieldDescriptorProtoTypeEnum = "TYPE_STRING"
	Proto2FieldDescriptorProtoTypeEnumTypeGroup    Proto2FieldDescriptorProtoTypeEnum = "TYPE_GROUP"
	Proto2FieldDescriptorProtoTypeEnumTypeMessage  Proto2FieldDescriptorProtoTypeEnum = "TYPE_MESSAGE"
	Proto2FieldDescriptorProtoTypeEnumTypeBytes    Proto2FieldDescriptorProtoTypeEnum = "TYPE_BYTES"
	Proto2FieldDescriptorProtoTypeEnumTypeUint32   Proto2FieldDescriptorProtoTypeEnum = "TYPE_UINT32"
	Proto2FieldDescriptorProtoTypeEnumTypeEnum     Proto2FieldDescriptorProtoTypeEnum = "TYPE_ENUM"
	Proto2FieldDescriptorProtoTypeEnumTypeSfixed32 Proto2FieldDescriptorProtoTypeEnum = "TYPE_SFIXED32"
	Proto2FieldDescriptorProtoTypeEnumTypeSfixed64 Proto2FieldDescriptorProtoTypeEnum = "TYPE_SFIXED64"
	Proto2FieldDescriptorProtoTypeEnumTypeSint32   Proto2FieldDescriptorProtoTypeEnum = "TYPE_SINT32"
	Proto2FieldDescriptorProtoTypeEnumTypeSint64   Proto2FieldDescriptorProtoTypeEnum = "TYPE_SINT64"
)

type Proto2FieldDescriptorProto struct {
	DefaultValue   *string                              `json:"defaultValue"`
	JSONName       *string                              `json:"jsonName"`
	Label          *Proto2FieldDescriptorProtoLabelEnum `json:"label"`
	Name           *string                              `json:"name"`
	Number         *int32                               `json:"number"`
	OneofIndex     *int32                               `json:"oneofIndex"`
	Proto3Optional *bool                                `json:"proto3Optional"`
	Type           *Proto2FieldDescriptorProtoTypeEnum  `json:"type"`
	TypeName       *string                              `json:"typeName"`
}
