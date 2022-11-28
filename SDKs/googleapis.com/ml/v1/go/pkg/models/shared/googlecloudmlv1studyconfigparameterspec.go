package shared

type GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum string

const (
	GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumScaleTypeUnspecified GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum = "SCALE_TYPE_UNSPECIFIED"
	GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitLinearScale      GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum = "UNIT_LINEAR_SCALE"
	GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitLogScale         GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum = "UNIT_LOG_SCALE"
	GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnumUnitReverseLogScale  GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum = "UNIT_REVERSE_LOG_SCALE"
)

type GoogleCloudMlV1StudyConfigParameterSpecTypeEnum string

const (
	GoogleCloudMlV1StudyConfigParameterSpecTypeEnumParameterTypeUnspecified GoogleCloudMlV1StudyConfigParameterSpecTypeEnum = "PARAMETER_TYPE_UNSPECIFIED"
	GoogleCloudMlV1StudyConfigParameterSpecTypeEnumDouble                   GoogleCloudMlV1StudyConfigParameterSpecTypeEnum = "DOUBLE"
	GoogleCloudMlV1StudyConfigParameterSpecTypeEnumInteger                  GoogleCloudMlV1StudyConfigParameterSpecTypeEnum = "INTEGER"
	GoogleCloudMlV1StudyConfigParameterSpecTypeEnumCategorical              GoogleCloudMlV1StudyConfigParameterSpecTypeEnum = "CATEGORICAL"
	GoogleCloudMlV1StudyConfigParameterSpecTypeEnumDiscrete                 GoogleCloudMlV1StudyConfigParameterSpecTypeEnum = "DISCRETE"
)

// GoogleCloudMlV1StudyConfigParameterSpec
// Represents a single parameter to optimize.
type GoogleCloudMlV1StudyConfigParameterSpec struct {
	CategoricalValueSpec    *GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec               `json:"categoricalValueSpec,omitempty"`
	ChildParameterSpecs     []GoogleCloudMlV1StudyConfigParameterSpec                                  `json:"childParameterSpecs,omitempty"`
	DiscreteValueSpec       *GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec                  `json:"discreteValueSpec,omitempty"`
	DoubleValueSpec         *GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec                    `json:"doubleValueSpec,omitempty"`
	IntegerValueSpec        *GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec                   `json:"integerValueSpec,omitempty"`
	Parameter               *string                                                                    `json:"parameter,omitempty"`
	ParentCategoricalValues *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec `json:"parentCategoricalValues,omitempty"`
	ParentDiscreteValues    *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec    `json:"parentDiscreteValues,omitempty"`
	ParentIntValues         *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec         `json:"parentIntValues,omitempty"`
	ScaleType               *GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum                      `json:"scaleType,omitempty"`
	Type                    *GoogleCloudMlV1StudyConfigParameterSpecTypeEnum                           `json:"type,omitempty"`
}
