package shared

type EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumDataTypeUnspecified   EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumStringValue           EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "STRING_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumIntValue              EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "INT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumDoubleValue           EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "DOUBLE_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBooleanValue          EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "BOOLEAN_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumProtoValue            EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "PROTO_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumSerializedObjectValue EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "SERIALIZED_OBJECT_VALUE"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumStringArray           EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "STRING_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumIntArray              EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "INT_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumDoubleArray           EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "DOUBLE_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumProtoArray            EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "PROTO_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumProtoEnum             EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "PROTO_ENUM"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBooleanArray          EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "BOOLEAN_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumProtoEnumArray        EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "PROTO_ENUM_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBytes                 EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "BYTES"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumBytesArray            EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "BYTES_ARRAY"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumNonSerializableObject EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "NON_SERIALIZABLE_OBJECT"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnumJSONValue             EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = "JSON_VALUE"
)

type EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumInOutTypeUnspecified EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum = "IN_OUT_TYPE_UNSPECIFIED"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumIn                   EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum = "IN"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumOut                  EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum = "OUT"
	EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnumInOut                EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum = "IN_OUT"
)

type EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry struct {
	Attributes   *EnterpriseCrmEventbusProtoAttributes                                   `json:"attributes"`
	Children     []EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry             `json:"children"`
	DataType     *EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum  `json:"dataType"`
	DefaultValue *EnterpriseCrmFrontendsEventbusProtoParameterValueType                  `json:"defaultValue"`
	InOutType    *EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum `json:"inOutType"`
	IsTransient  *bool                                                                   `json:"isTransient"`
	JSONSchema   *string                                                                 `json:"jsonSchema"`
	Key          *string                                                                 `json:"key"`
	Name         *string                                                                 `json:"name"`
	ProducedBy   *EnterpriseCrmEventbusProtoNodeIdentifier                               `json:"producedBy"`
	Producer     *string                                                                 `json:"producer"`
	ProtoDefName *string                                                                 `json:"protoDefName"`
	ProtoDefPath *string                                                                 `json:"protoDefPath"`
}
