package shared

type SortOptionsSortOrderEnum string

const (
	SortOptionsSortOrderEnumAscending  SortOptionsSortOrderEnum = "ASCENDING"
	SortOptionsSortOrderEnumDescending SortOptionsSortOrderEnum = "DESCENDING"
)

type SortOptions struct {
	OperatorName *string                   `json:"operatorName"`
	SortOrder    *SortOptionsSortOrderEnum `json:"sortOrder"`
}
