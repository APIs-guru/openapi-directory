package shared

type EnumPropertyOptionsOrderedRankingEnum string

const (
	EnumPropertyOptionsOrderedRankingEnumNoOrder    EnumPropertyOptionsOrderedRankingEnum = "NO_ORDER"
	EnumPropertyOptionsOrderedRankingEnumAscending  EnumPropertyOptionsOrderedRankingEnum = "ASCENDING"
	EnumPropertyOptionsOrderedRankingEnumDescending EnumPropertyOptionsOrderedRankingEnum = "DESCENDING"
)

type EnumPropertyOptions struct {
	OperatorOptions *EnumOperatorOptions                   `json:"operatorOptions,omitempty"`
	OrderedRanking  *EnumPropertyOptionsOrderedRankingEnum `json:"orderedRanking,omitempty"`
	PossibleValues  []EnumValuePair                        `json:"possibleValues,omitempty"`
}
