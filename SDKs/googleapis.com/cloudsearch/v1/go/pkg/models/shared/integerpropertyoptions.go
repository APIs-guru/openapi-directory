package shared

type IntegerPropertyOptionsOrderedRankingEnum string

const (
	IntegerPropertyOptionsOrderedRankingEnumNoOrder    IntegerPropertyOptionsOrderedRankingEnum = "NO_ORDER"
	IntegerPropertyOptionsOrderedRankingEnumAscending  IntegerPropertyOptionsOrderedRankingEnum = "ASCENDING"
	IntegerPropertyOptionsOrderedRankingEnumDescending IntegerPropertyOptionsOrderedRankingEnum = "DESCENDING"
)

// IntegerPropertyOptions
// The options for integer properties.
type IntegerPropertyOptions struct {
	MaximumValue    *string                                   `json:"maximumValue,omitempty"`
	MinimumValue    *string                                   `json:"minimumValue,omitempty"`
	OperatorOptions *IntegerOperatorOptions                   `json:"operatorOptions,omitempty"`
	OrderedRanking  *IntegerPropertyOptionsOrderedRankingEnum `json:"orderedRanking,omitempty"`
}
