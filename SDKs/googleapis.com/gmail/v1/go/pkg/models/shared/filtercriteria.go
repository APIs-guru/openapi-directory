package shared

type FilterCriteriaSizeComparisonEnum string

const (
	FilterCriteriaSizeComparisonEnumUnspecified FilterCriteriaSizeComparisonEnum = "unspecified"
	FilterCriteriaSizeComparisonEnumSmaller     FilterCriteriaSizeComparisonEnum = "smaller"
	FilterCriteriaSizeComparisonEnumLarger      FilterCriteriaSizeComparisonEnum = "larger"
)

// FilterCriteria
// Message matching criteria.
type FilterCriteria struct {
	ExcludeChats   *bool                             `json:"excludeChats,omitempty"`
	From           *string                           `json:"from,omitempty"`
	HasAttachment  *bool                             `json:"hasAttachment,omitempty"`
	NegatedQuery   *string                           `json:"negatedQuery,omitempty"`
	Query          *string                           `json:"query,omitempty"`
	Size           *int32                            `json:"size,omitempty"`
	SizeComparison *FilterCriteriaSizeComparisonEnum `json:"sizeComparison,omitempty"`
	Subject        *string                           `json:"subject,omitempty"`
	To             *string                           `json:"to,omitempty"`
}
