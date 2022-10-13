package shared

type IntegerPropertyOptionsOrderedRankingEnum string

const (
	IntegerPropertyOptionsOrderedRankingEnumNoOrder    IntegerPropertyOptionsOrderedRankingEnum = "NO_ORDER"
	IntegerPropertyOptionsOrderedRankingEnumAscending  IntegerPropertyOptionsOrderedRankingEnum = "ASCENDING"
	IntegerPropertyOptionsOrderedRankingEnumDescending IntegerPropertyOptionsOrderedRankingEnum = "DESCENDING"
)

type IntegerPropertyOptions struct {
	MaximumValue    *string                                   `json:"maximumValue"`
	MinimumValue    *string                                   `json:"minimumValue"`
	OperatorOptions *IntegerOperatorOptions                   `json:"operatorOptions"`
	OrderedRanking  *IntegerPropertyOptionsOrderedRankingEnum `json:"orderedRanking"`
}
