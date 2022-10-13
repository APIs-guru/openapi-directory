package shared

type GoogleCloudMlV1ParameterSpecScaleTypeEnum string

const (
	GoogleCloudMlV1ParameterSpecScaleTypeEnumNone                GoogleCloudMlV1ParameterSpecScaleTypeEnum = "NONE"
	GoogleCloudMlV1ParameterSpecScaleTypeEnumUnitLinearScale     GoogleCloudMlV1ParameterSpecScaleTypeEnum = "UNIT_LINEAR_SCALE"
	GoogleCloudMlV1ParameterSpecScaleTypeEnumUnitLogScale        GoogleCloudMlV1ParameterSpecScaleTypeEnum = "UNIT_LOG_SCALE"
	GoogleCloudMlV1ParameterSpecScaleTypeEnumUnitReverseLogScale GoogleCloudMlV1ParameterSpecScaleTypeEnum = "UNIT_REVERSE_LOG_SCALE"
)

type GoogleCloudMlV1ParameterSpecTypeEnum string

const (
	GoogleCloudMlV1ParameterSpecTypeEnumParameterTypeUnspecified GoogleCloudMlV1ParameterSpecTypeEnum = "PARAMETER_TYPE_UNSPECIFIED"
	GoogleCloudMlV1ParameterSpecTypeEnumDouble                   GoogleCloudMlV1ParameterSpecTypeEnum = "DOUBLE"
	GoogleCloudMlV1ParameterSpecTypeEnumInteger                  GoogleCloudMlV1ParameterSpecTypeEnum = "INTEGER"
	GoogleCloudMlV1ParameterSpecTypeEnumCategorical              GoogleCloudMlV1ParameterSpecTypeEnum = "CATEGORICAL"
	GoogleCloudMlV1ParameterSpecTypeEnumDiscrete                 GoogleCloudMlV1ParameterSpecTypeEnum = "DISCRETE"
)

type GoogleCloudMlV1ParameterSpec struct {
	CategoricalValues []string                                   `json:"categoricalValues"`
	DiscreteValues    []float64                                  `json:"discreteValues"`
	MaxValue          *float64                                   `json:"maxValue"`
	MinValue          *float64                                   `json:"minValue"`
	ParameterName     *string                                    `json:"parameterName"`
	ScaleType         *GoogleCloudMlV1ParameterSpecScaleTypeEnum `json:"scaleType"`
	Type              *GoogleCloudMlV1ParameterSpecTypeEnum      `json:"type"`
}
