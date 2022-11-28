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

// CustomRankingInfo
// Custom ranking information for SearchJobsRequest.
type CustomRankingInfo struct {
	ImportanceLevel   *CustomRankingInfoImportanceLevelEnum `json:"importanceLevel,omitempty"`
	RankingExpression *string                               `json:"rankingExpression,omitempty"`
}
