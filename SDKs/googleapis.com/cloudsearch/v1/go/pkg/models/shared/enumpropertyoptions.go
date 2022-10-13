package shared

type EnumPropertyOptionsOrderedRankingEnum string

const (
	EnumPropertyOptionsOrderedRankingEnumNoOrder    EnumPropertyOptionsOrderedRankingEnum = "NO_ORDER"
	EnumPropertyOptionsOrderedRankingEnumAscending  EnumPropertyOptionsOrderedRankingEnum = "ASCENDING"
	EnumPropertyOptionsOrderedRankingEnumDescending EnumPropertyOptionsOrderedRankingEnum = "DESCENDING"
)

type EnumPropertyOptions struct {
	OperatorOptions *EnumOperatorOptions                   `json:"operatorOptions"`
	OrderedRanking  *EnumPropertyOptionsOrderedRankingEnum `json:"orderedRanking"`
	PossibleValues  []EnumValuePair                        `json:"possibleValues"`
}
