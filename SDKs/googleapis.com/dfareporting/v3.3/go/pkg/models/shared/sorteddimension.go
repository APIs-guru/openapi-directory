package shared

type SortedDimensionSortOrderEnum string

const (
	SortedDimensionSortOrderEnumAscending  SortedDimensionSortOrderEnum = "ASCENDING"
	SortedDimensionSortOrderEnumDescending SortedDimensionSortOrderEnum = "DESCENDING"
)

type SortedDimension struct {
	Kind      *string                       `json:"kind"`
	Name      *string                       `json:"name"`
	SortOrder *SortedDimensionSortOrderEnum `json:"sortOrder"`
}
