package shared

type PivotGroupSortOrderEnum string

const (
	PivotGroupSortOrderEnumSortOrderUnspecified PivotGroupSortOrderEnum = "SORT_ORDER_UNSPECIFIED"
	PivotGroupSortOrderEnumAscending            PivotGroupSortOrderEnum = "ASCENDING"
	PivotGroupSortOrderEnumDescending           PivotGroupSortOrderEnum = "DESCENDING"
)

type PivotGroup struct {
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference"`
	GroupLimit                *PivotGroupLimit           `json:"groupLimit"`
	GroupRule                 *PivotGroupRule            `json:"groupRule"`
	Label                     *string                    `json:"label"`
	RepeatHeadings            *bool                      `json:"repeatHeadings"`
	ShowTotals                *bool                      `json:"showTotals"`
	SortOrder                 *PivotGroupSortOrderEnum   `json:"sortOrder"`
	SourceColumnOffset        *int32                     `json:"sourceColumnOffset"`
	ValueBucket               *PivotGroupSortValueBucket `json:"valueBucket"`
	ValueMetadata             []PivotGroupValueMetadata  `json:"valueMetadata"`
}
