package shared

type EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumDataTypeUnspecified   EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumStringValue           EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "STRING_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumIntValue              EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "INT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumDoubleValue           EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "DOUBLE_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBooleanValue          EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "BOOLEAN_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoValue            EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "PROTO_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumSerializedObjectValue EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "SERIALIZED_OBJECT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumStringArray           EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "STRING_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumIntArray              EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "INT_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumDoubleArray           EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "DOUBLE_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoArray            EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "PROTO_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoEnum             EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "PROTO_ENUM"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBooleanArray          EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "BOOLEAN_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumProtoEnumArray        EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "PROTO_ENUM_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBytes                 EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "BYTES"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumBytesArray            EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "BYTES_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumNonSerializableObject EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "NON_SERIALIZABLE_OBJECT"
	EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnumJSONValue             EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = "JSON_VALUE"
)

type EnterpriseCrmFrontendsEventbusProtoParamSpecEntry struct {
	ClassName                  *string                                                        `json:"className"`
	CollectionElementClassName *string                                                        `json:"collectionElementClassName"`
	Config                     *EnterpriseCrmEventbusProtoParamSpecEntryConfig                `json:"config"`
	DataType                   *EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum `json:"dataType"`
	DefaultValue               *EnterpriseCrmFrontendsEventbusProtoParameterValueType         `json:"defaultValue"`
	IsDeprecated               *bool                                                          `json:"isDeprecated"`
	IsOutput                   *bool                                                          `json:"isOutput"`
	JSONSchema                 *string                                                        `json:"jsonSchema"`
	Key                        *string                                                        `json:"key"`
	ProtoDef                   *EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition       `json:"protoDef"`
	Required                   *bool                                                          `json:"required"`
	ValidationRule             *EnterpriseCrmEventbusProtoParamSpecEntryValidationRule        `json:"validationRule"`
}
