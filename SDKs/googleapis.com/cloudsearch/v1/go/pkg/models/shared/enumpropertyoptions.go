package shared

type EnumPropertyOptionsOrderedRankingEnum string

const (
	EnumPropertyOptionsOrderedRankingEnumNoOrder    EnumPropertyOptionsOrderedRankingEnum = "NO_ORDER"
	EnumPropertyOptionsOrderedRankingEnumAscending  EnumPropertyOptionsOrderedRankingEnum = "ASCENDING"
	EnumPropertyOptionsOrderedRankingEnumDescending EnumPropertyOptionsOrderedRankingEnum = "DESCENDING"
)

// EnumPropertyOptions
// The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
type EnumPropertyOptions struct {
	OperatorOptions *EnumOperatorOptions                   `json:"operatorOptions,omitempty"`
	OrderedRanking  *EnumPropertyOptionsOrderedRankingEnum `json:"orderedRanking,omitempty"`
	PossibleValues  []EnumValuePair                        `json:"possibleValues,omitempty"`
}
