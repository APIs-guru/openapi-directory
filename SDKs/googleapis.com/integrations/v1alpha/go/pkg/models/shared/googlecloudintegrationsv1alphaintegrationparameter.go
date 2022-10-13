package shared

type GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumIntegrationParameterDataTypeUnspecified GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumStringValue                             GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "STRING_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumIntValue                                GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "INT_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumDoubleValue                             GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "DOUBLE_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumBooleanValue                            GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "BOOLEAN_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumStringArray                             GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "STRING_ARRAY"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumIntArray                                GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "INT_ARRAY"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumDoubleArray                             GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "DOUBLE_ARRAY"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumBooleanArray                            GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "BOOLEAN_ARRAY"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumJSONValue                               GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "JSON_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumProtoValue                              GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "PROTO_VALUE"
	GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnumProtoArray                              GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = "PROTO_ARRAY"
)

type GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnumInOutTypeUnspecified GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum = "IN_OUT_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnumIn                   GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum = "IN"
	GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnumOut                  GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum = "OUT"
	GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnumInOut                GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum = "IN_OUT"
)

type GoogleCloudIntegrationsV1alphaIntegrationParameter struct {
	DataType        *GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum        `json:"dataType"`
	DefaultValue    *GoogleCloudIntegrationsV1alphaValueType                               `json:"defaultValue"`
	DisplayName     *string                                                                `json:"displayName"`
	InputOutputType *GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum `json:"inputOutputType"`
	IsTransient     *bool                                                                  `json:"isTransient"`
	JSONSchema      *string                                                                `json:"jsonSchema"`
	Key             *string                                                                `json:"key"`
	Producer        *string                                                                `json:"producer"`
	Searchable      *bool                                                                  `json:"searchable"`
}
