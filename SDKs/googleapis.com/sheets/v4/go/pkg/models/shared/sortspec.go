package shared

type SortSpecSortOrderEnum string

const (
	SortSpecSortOrderEnumSortOrderUnspecified SortSpecSortOrderEnum = "SORT_ORDER_UNSPECIFIED"
	SortSpecSortOrderEnumAscending            SortSpecSortOrderEnum = "ASCENDING"
	SortSpecSortOrderEnumDescending           SortSpecSortOrderEnum = "DESCENDING"
)

// SortSpec
// A sort order associated with a specific column or row.
type SortSpec struct {
	BackgroundColor           *Color                     `json:"backgroundColor,omitempty"`
	BackgroundColorStyle      *ColorStyle                `json:"backgroundColorStyle,omitempty"`
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
	DimensionIndex            *int32                     `json:"dimensionIndex,omitempty"`
	ForegroundColor           *Color                     `json:"foregroundColor,omitempty"`
	ForegroundColorStyle      *ColorStyle                `json:"foregroundColorStyle,omitempty"`
	SortOrder                 *SortSpecSortOrderEnum     `json:"sortOrder,omitempty"`
}
