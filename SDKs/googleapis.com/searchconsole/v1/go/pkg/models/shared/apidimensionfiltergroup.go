package shared

type APIDimensionFilterGroupGroupTypeEnum string

const (
	APIDimensionFilterGroupGroupTypeEnumAnd APIDimensionFilterGroupGroupTypeEnum = "AND"
)

// APIDimensionFilterGroup
// A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.
type APIDimensionFilterGroup struct {
	Filters   []APIDimensionFilter                  `json:"filters,omitempty"`
	GroupType *APIDimensionFilterGroupGroupTypeEnum `json:"groupType,omitempty"`
}
