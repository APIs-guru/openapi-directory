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

type GoogleCloudMlV1StudyConfigParameterSpec struct {
	CategoricalValueSpec    *GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec               `json:"categoricalValueSpec"`
	ChildParameterSpecs     []GoogleCloudMlV1StudyConfigParameterSpec                                  `json:"childParameterSpecs"`
	DiscreteValueSpec       *GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec                  `json:"discreteValueSpec"`
	DoubleValueSpec         *GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec                    `json:"doubleValueSpec"`
	IntegerValueSpec        *GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec                   `json:"integerValueSpec"`
	Parameter               *string                                                                    `json:"parameter"`
	ParentCategoricalValues *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec `json:"parentCategoricalValues"`
	ParentDiscreteValues    *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec    `json:"parentDiscreteValues"`
	ParentIntValues         *GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec         `json:"parentIntValues"`
	ScaleType               *GoogleCloudMlV1StudyConfigParameterSpecScaleTypeEnum                      `json:"scaleType"`
	Type                    *GoogleCloudMlV1StudyConfigParameterSpecTypeEnum                           `json:"type"`
}
