package shared

type AttributeParametersScoreTypeEnum string

const (
	AttributeParametersScoreTypeEnumScoreTypeUnspecified AttributeParametersScoreTypeEnum = "SCORE_TYPE_UNSPECIFIED"
	AttributeParametersScoreTypeEnumProbability          AttributeParametersScoreTypeEnum = "PROBABILITY"
	AttributeParametersScoreTypeEnumStdDevScore          AttributeParametersScoreTypeEnum = "STD_DEV_SCORE"
	AttributeParametersScoreTypeEnumPercentile           AttributeParametersScoreTypeEnum = "PERCENTILE"
	AttributeParametersScoreTypeEnumRaw                  AttributeParametersScoreTypeEnum = "RAW"
)

type AttributeParameters struct {
	ScoreThreshold *float32                          `json:"scoreThreshold,omitempty"`
	ScoreType      *AttributeParametersScoreTypeEnum `json:"scoreType,omitempty"`
}
