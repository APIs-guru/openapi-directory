package shared

type SortSpecSortOrderEnum string

const (
	SortSpecSortOrderEnumSortOrderUnspecified SortSpecSortOrderEnum = "SORT_ORDER_UNSPECIFIED"
	SortSpecSortOrderEnumAscending            SortSpecSortOrderEnum = "ASCENDING"
	SortSpecSortOrderEnumDescending           SortSpecSortOrderEnum = "DESCENDING"
)

type SortSpec struct {
	BackgroundColor           *Color                     `json:"backgroundColor"`
	BackgroundColorStyle      *ColorStyle                `json:"backgroundColorStyle"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference"`
	DimensionIndex            *int32                     `json:"dimensionIndex"`
	ForegroundColor           *Color                     `json:"foregroundColor"`
	ForegroundColorStyle      *ColorStyle                `json:"foregroundColorStyle"`
	SortOrder                 *SortSpecSortOrderEnum     `json:"sortOrder"`
}
