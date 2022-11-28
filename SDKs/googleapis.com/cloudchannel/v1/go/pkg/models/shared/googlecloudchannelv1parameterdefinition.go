package shared

type GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum string

const (
	GoogleCloudChannelV1ParameterDefinitionParameterTypeEnumParameterTypeUnspecified GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum = "PARAMETER_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1ParameterDefinitionParameterTypeEnumInt64                    GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum = "INT64"
	GoogleCloudChannelV1ParameterDefinitionParameterTypeEnumString                   GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum = "STRING"
	GoogleCloudChannelV1ParameterDefinitionParameterTypeEnumDouble                   GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum = "DOUBLE"
)

// GoogleCloudChannelV1ParameterDefinition
// Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
type GoogleCloudChannelV1ParameterDefinition struct {
	AllowedValues []GoogleCloudChannelV1Value                               `json:"allowedValues,omitempty"`
	MaxValue      *GoogleCloudChannelV1Value                                `json:"maxValue,omitempty"`
	MinValue      *GoogleCloudChannelV1Value                                `json:"minValue,omitempty"`
	Name          *string                                                   `json:"name,omitempty"`
	Optional      *bool                                                     `json:"optional,omitempty"`
	ParameterType *GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum `json:"parameterType,omitempty"`
}
