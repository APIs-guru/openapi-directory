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

// EnterpriseCrmFrontendsEventbusProtoParamSpecEntry
// Key-value pair of EventBus task parameters. Next id: 13
type EnterpriseCrmFrontendsEventbusProtoParamSpecEntry struct {
	ClassName                  *string                                                        `json:"className,omitempty"`
	CollectionElementClassName *string                                                        `json:"collectionElementClassName,omitempty"`
	Config                     *EnterpriseCrmEventbusProtoParamSpecEntryConfig                `json:"config,omitempty"`
	DataType                   *EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum `json:"dataType,omitempty"`
	DefaultValue               *EnterpriseCrmFrontendsEventbusProtoParameterValueType         `json:"defaultValue,omitempty"`
	IsDeprecated               *bool                                                          `json:"isDeprecated,omitempty"`
	IsOutput                   *bool                                                          `json:"isOutput,omitempty"`
	JSONSchema                 *string                                                        `json:"jsonSchema,omitempty"`
	Key                        *string                                                        `json:"key,omitempty"`
	ProtoDef                   *EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition       `json:"protoDef,omitempty"`
	Required                   *bool                                                          `json:"required,omitempty"`
	ValidationRule             *EnterpriseCrmEventbusProtoParamSpecEntryValidationRule        `json:"validationRule,omitempty"`
}
