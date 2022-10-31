package shared

type SortOptionsSortOrderEnum string

const (
	SortOptionsSortOrderEnumAscending  SortOptionsSortOrderEnum = "ASCENDING"
	SortOptionsSortOrderEnumDescending SortOptionsSortOrderEnum = "DESCENDING"
)

type SortOptions struct {
	OperatorName *string                   `json:"operatorName,omitempty"`
	SortOrder    *SortOptionsSortOrderEnum `json:"sortOrder,omitempty"`
}
