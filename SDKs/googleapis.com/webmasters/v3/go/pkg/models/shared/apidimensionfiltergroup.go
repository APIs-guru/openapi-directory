package shared

type APIDimensionFilterGroup struct {
	Filters   []APIDimensionFilter `json:"filters"`
	GroupType *string              `json:"groupType"`
}
