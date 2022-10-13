package shared

type FilterCriteriaSizeComparisonEnum string

const (
	FilterCriteriaSizeComparisonEnumUnspecified FilterCriteriaSizeComparisonEnum = "unspecified"
	FilterCriteriaSizeComparisonEnumSmaller     FilterCriteriaSizeComparisonEnum = "smaller"
	FilterCriteriaSizeComparisonEnumLarger      FilterCriteriaSizeComparisonEnum = "larger"
)

type FilterCriteria struct {
	ExcludeChats   *bool                             `json:"excludeChats"`
	From           *string                           `json:"from"`
	HasAttachment  *bool                             `json:"hasAttachment"`
	NegatedQuery   *string                           `json:"negatedQuery"`
	Query          *string                           `json:"query"`
	Size           *int32                            `json:"size"`
	SizeComparison *FilterCriteriaSizeComparisonEnum `json:"sizeComparison"`
	Subject        *string                           `json:"subject"`
	To             *string                           `json:"to"`
}
