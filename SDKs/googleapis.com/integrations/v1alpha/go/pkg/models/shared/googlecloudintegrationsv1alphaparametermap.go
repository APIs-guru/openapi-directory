package shared

type GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumIntegrationParameterDataTypeUnspecified GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumStringValue                             GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "STRING_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumIntValue                                GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "INT_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumDoubleValue                             GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "DOUBLE_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumBooleanValue                            GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "BOOLEAN_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumStringArray                             GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "STRING_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumIntArray                                GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "INT_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumDoubleArray                             GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "DOUBLE_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumBooleanArray                            GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "BOOLEAN_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumJSONValue                               GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "JSON_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumProtoValue                              GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "PROTO_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnumProtoArray                              GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = "PROTO_ARRAY"
)

type GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumIntegrationParameterDataTypeUnspecified GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumStringValue                             GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "STRING_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumIntValue                                GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "INT_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumDoubleValue                             GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "DOUBLE_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumBooleanValue                            GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "BOOLEAN_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumStringArray                             GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "STRING_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumIntArray                                GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "INT_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumDoubleArray                             GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "DOUBLE_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumBooleanArray                            GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "BOOLEAN_ARRAY"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumJSONValue                               GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "JSON_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumProtoValue                              GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "PROTO_VALUE"
	GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnumProtoArray                              GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = "PROTO_ARRAY"
)

// GoogleCloudIntegrationsV1alphaParameterMap
// A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
type GoogleCloudIntegrationsV1alphaParameterMap struct {
	Entries   []GoogleCloudIntegrationsV1alphaParameterMapEntry        `json:"entries,omitempty"`
	KeyType   *GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum   `json:"keyType,omitempty"`
	ValueType *GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum `json:"valueType,omitempty"`
}
