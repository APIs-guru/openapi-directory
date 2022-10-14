package shared

type APIDimensionFilterGroupGroupTypeEnum string

const (
	APIDimensionFilterGroupGroupTypeEnumAnd APIDimensionFilterGroupGroupTypeEnum = "AND"
)

type APIDimensionFilterGroup struct {
	Filters   []APIDimensionFilter                  `json:"filters,omitempty"`
	GroupType *APIDimensionFilterGroupGroupTypeEnum `json:"groupType,omitempty"`
}
