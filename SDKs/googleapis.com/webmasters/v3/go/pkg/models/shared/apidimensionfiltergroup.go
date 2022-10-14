package shared

type APIDimensionFilterGroup struct {
	Filters   []APIDimensionFilter `json:"filters,omitempty"`
	GroupType *string              `json:"groupType,omitempty"`
}
