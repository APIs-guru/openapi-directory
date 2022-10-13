package shared

type CustomRankingInfoImportanceLevelEnum string

const (
	CustomRankingInfoImportanceLevelEnumImportanceLevelUnspecified CustomRankingInfoImportanceLevelEnum = "IMPORTANCE_LEVEL_UNSPECIFIED"
	CustomRankingInfoImportanceLevelEnumNone                       CustomRankingInfoImportanceLevelEnum = "NONE"
	CustomRankingInfoImportanceLevelEnumLow                        CustomRankingInfoImportanceLevelEnum = "LOW"
	CustomRankingInfoImportanceLevelEnumMild                       CustomRankingInfoImportanceLevelEnum = "MILD"
	CustomRankingInfoImportanceLevelEnumMedium                     CustomRankingInfoImportanceLevelEnum = "MEDIUM"
	CustomRankingInfoImportanceLevelEnumHigh                       CustomRankingInfoImportanceLevelEnum = "HIGH"
	CustomRankingInfoImportanceLevelEnumExtreme                    CustomRankingInfoImportanceLevelEnum = "EXTREME"
)

type CustomRankingInfo struct {
	ImportanceLevel   *CustomRankingInfoImportanceLevelEnum `json:"importanceLevel"`
	RankingExpression *string                               `json:"rankingExpression"`
}
