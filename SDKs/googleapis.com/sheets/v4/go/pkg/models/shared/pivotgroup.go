package shared

type PivotGroupSortOrderEnum string

const (
	PivotGroupSortOrderEnumSortOrderUnspecified PivotGroupSortOrderEnum = "SORT_ORDER_UNSPECIFIED"
	PivotGroupSortOrderEnumAscending            PivotGroupSortOrderEnum = "ASCENDING"
	PivotGroupSortOrderEnumDescending           PivotGroupSortOrderEnum = "DESCENDING"
)

// PivotGroup
// A single grouping (either row or column) in a pivot table.
type PivotGroup struct {
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
	GroupLimit                *PivotGroupLimit           `json:"groupLimit,omitempty"`
	GroupRule                 *PivotGroupRule            `json:"groupRule,omitempty"`
	Label                     *string                    `json:"label,omitempty"`
	RepeatHeadings            *bool                      `json:"repeatHeadings,omitempty"`
	ShowTotals                *bool                      `json:"showTotals,omitempty"`
	SortOrder                 *PivotGroupSortOrderEnum   `json:"sortOrder,omitempty"`
	SourceColumnOffset        *int32                     `json:"sourceColumnOffset,omitempty"`
	ValueBucket               *PivotGroupSortValueBucket `json:"valueBucket,omitempty"`
	ValueMetadata             []PivotGroupValueMetadata  `json:"valueMetadata,omitempty"`
}
