package shared

type ScoreTypeEnum string

const (
	ScoreTypeEnumScoreTypeUnspecified ScoreTypeEnum = "SCORE_TYPE_UNSPECIFIED"
	ScoreTypeEnumProbability          ScoreTypeEnum = "PROBABILITY"
	ScoreTypeEnumStdDevScore          ScoreTypeEnum = "STD_DEV_SCORE"
	ScoreTypeEnumPercentile           ScoreTypeEnum = "PERCENTILE"
	ScoreTypeEnumRaw                  ScoreTypeEnum = "RAW"
)

// Score
// Analysis scores are described by a value and a ScoreType.
type Score struct {
	Type  *ScoreTypeEnum `json:"type,omitempty"`
	Value *float32       `json:"value,omitempty"`
}
