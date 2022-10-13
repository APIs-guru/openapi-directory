package shared

type EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumDataTypeUnspecified   EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumStringValue           EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "STRING_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumIntValue              EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "INT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumDoubleValue           EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "DOUBLE_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanValue          EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "BOOLEAN_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoValue            EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "PROTO_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumSerializedObjectValue EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "SERIALIZED_OBJECT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumStringArray           EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "STRING_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumIntArray              EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "INT_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumDoubleArray           EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "DOUBLE_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoArray            EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "PROTO_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoEnum             EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "PROTO_ENUM"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBooleanArray          EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "BOOLEAN_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumProtoEnumArray        EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "PROTO_ENUM_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBytes                 EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "BYTES"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumBytesArray            EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "BYTES_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumNonSerializableObject EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "NON_SERIALIZABLE_OBJECT"
	EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnumJSONValue             EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = "JSON_VALUE"
)

type EnterpriseCrmFrontendsEventbusProtoParameterEntry struct {
	DataType *EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum `json:"dataType"`
	Key      *string                                                        `json:"key"`
	Value    *EnterpriseCrmFrontendsEventbusProtoParameterValueType         `json:"value"`
}
